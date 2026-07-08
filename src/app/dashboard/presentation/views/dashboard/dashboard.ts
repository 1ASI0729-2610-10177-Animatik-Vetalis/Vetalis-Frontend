import { Component, inject, computed, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ChartConfiguration } from 'chart.js';
import { ClinicalStore } from '../../../../clinical/application/clinical.store';
import { DashboardService } from '../../../infrastructure/services/dashboard.service';
import { ChartComponent } from '../../../../shared/presentation/components/chart/chart';
import { NuevaConsultaDialog } from '../../../../clinical/presentation/components/nueva-consulta-dialog/nueva-consulta-dialog';
import { NuevaCitaDialog } from '../../../../clinical/presentation/components/nueva-cita-dialog/nueva-cita-dialog';
import { RegistrarPacienteDialog } from '../../../../clinical/presentation/components/registrar-paciente-dialog/registrar-paciente-dialog';

const MESES = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
const ESPECIE_COLORS = ['#06B6D4', '#8B5CF6', '#F97316', '#22C55E', '#EF4444', '#F59E0B', '#EC4899'];

@Component({
  selector: 'app-dashboard',
  imports: [NgClass, MatIconModule, MatButtonModule, MatDialogModule, TranslatePipe, ChartComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  store            = inject(ClinicalStore);
  private dashSvc  = inject(DashboardService);
  private dialog   = inject(MatDialog);
  private t        = inject(TranslateService);

  summary = signal<any>(null);
  proximasCitas = signal<any[]>([]);
  actividadReciente = signal<any[]>([]);

  constructor() {
    this.dashSvc.getSummary().subscribe(s => {
      if (s) {
        this.summary.set(s);
        this.proximasCitas.set(s.proximasCitas ?? []);
        this.actividadReciente.set(s.actividadReciente ?? []);
      }
    });
  }

  // ── Stats: usa backend si disponible, fallback al store ──────
  stats = computed(() => {
    const s = this.summary();
    return [
      { labelKey: 'dashboard.stats.todayAppointments', value: s ? s.citasHoy           : this.store.todayAppointments().length, delta: '+12%', positive: true,  icon: 'event_note',     color: '#3B82F6', bg: '#EFF6FF' },
      { labelKey: 'dashboard.stats.activePatients',    value: s ? s.pacientesActivos    : this.store.patients().length,           delta: '+8%',  positive: true,  icon: 'pets',           color: '#8B5CF6', bg: '#F5F3FF' },
      { labelKey: 'dashboard.stats.hospitalized',      value: s ? s.hospitalizados      : this.store.hospitalizations().length,   delta: '-3%',  positive: false, icon: 'local_hospital', color: '#F97316', bg: '#FFF7ED' },
      { labelKey: 'dashboard.stats.vaccinesApplied',   value: s ? s.vacunasAplicadas    : this.store.vaccines().length,           delta: '+15%', positive: true,  icon: 'vaccines',       color: '#22C55E', bg: '#F0FDF4' },
    ];
  });

  // ── Gráfico: consultas de los últimos 6 meses ─────────────────
  consultasChartData = computed<ChartConfiguration<'bar'>['data']>(() => {
    const now = new Date();
    const buckets: { key: string; label: string; count: number }[] = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      buckets.push({ key: `${d.getFullYear()}-${d.getMonth()}`, label: MESES[d.getMonth()], count: 0 });
    }
    for (const c of this.store.consultations()) {
      if (!c.rawDate) continue;
      const d = new Date(c.rawDate);
      const key = `${d.getFullYear()}-${d.getMonth()}`;
      const b = buckets.find(x => x.key === key);
      if (b) b.count++;
    }
    return {
      labels: buckets.map(b => b.label),
      datasets: [{
        data: buckets.map(b => b.count),
        backgroundColor: '#06B6D4',
        borderRadius: 6,
        maxBarThickness: 34,
      }],
    };
  });

  // ── Gráfico: pacientes por especie ────────────────────────────
  especiesChartData = computed<ChartConfiguration<'doughnut'>['data']>(() => {
    const map = new Map<string, number>();
    for (const p of this.store.patients()) {
      const key = p.species || '—';
      map.set(key, (map.get(key) ?? 0) + 1);
    }
    const entries = [...map.entries()];
    return {
      labels: entries.map(e => e[0]),
      datasets: [{
        data: entries.map(e => e[1]),
        backgroundColor: entries.map((_, i) => ESPECIE_COLORS[i % ESPECIE_COLORS.length]),
        borderWidth: 0,
      }],
    };
  });

  barOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#94A3B8', font: { size: 12 } } },
      y: { beginAtZero: true, ticks: { color: '#94A3B8', font: { size: 12 }, precision: 0 }, grid: { color: '#F1F5F9' } },
    },
  };

  doughnutOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '62%',
    plugins: {
      legend: { position: 'bottom', labels: { color: '#64748B', font: { size: 12 }, padding: 14, usePointStyle: true, pointStyle: 'circle' } },
    },
  };

  staticActivities = [
    { icon: 'add_circle',    color: '#06B6D4', bg: '#E0F2FE', titleKey: 'dashboard.activity.items.newConsult',      subtitle: 'Max - Control General',      time: 'Hace 15 minutos' },
    { icon: 'check_circle',  color: '#22C55E', bg: '#DCFCE7', titleKey: 'dashboard.activity.items.vaccineApplied',  subtitle: 'Luna - Antirrábica',         time: 'Hace 1 hora' },
    { icon: 'person_add',    color: '#8B5CF6', bg: '#F5F3FF', titleKey: 'dashboard.activity.items.newClient',       subtitle: 'Ana Martínez',               time: 'Hace 2 horas' },
    { icon: 'description',   color: '#F97316', bg: '#FFF7ED', titleKey: 'dashboard.activity.items.historyUpdated',  subtitle: 'Rocky - Cirugía programada', time: 'Hace 3 horas' },
    { icon: 'notifications', color: '#EF4444', bg: '#FEF2F2', titleKey: 'dashboard.activity.items.pendingReminder', subtitle: 'Vacuna próxima - Toby',      time: 'Hace 4 horas' },
  ];

  get activities() {
    const backend = this.actividadReciente();
    if (backend.length > 0) {
      return backend.map((a: any) => ({
        icon: 'event_note', color: '#06B6D4', bg: '#E0F2FE',
        titleKey: 'dashboard.activity.items.newConsult',
        subtitle: a.descripcion ?? '',
        time: a.fecha ? (a.fecha as string).slice(0, 10) : '',
      }));
    }
    return this.staticActivities;
  }

  openNuevaConsulta() {
    this.dialog.open(NuevaConsultaDialog, { width: '640px' })
      .afterClosed().subscribe(ok => { if (ok) this.store.reload(); });
  }

  openNuevaCita() {
    this.dialog.open(NuevaCitaDialog, { width: '520px' })
      .afterClosed().subscribe(ok => { if (ok) this.store.reload(); });
  }

  openRegistrarPaciente() {
    this.dialog.open(RegistrarPacienteDialog, { width: '580px' })
      .afterClosed().subscribe(ok => { if (ok) this.store.reload(); });
  }
}
