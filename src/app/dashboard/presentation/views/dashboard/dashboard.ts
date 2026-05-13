import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslatePipe } from '@ngx-translate/core';
import { ClinicalStore } from '../../../../clinical/application/clinical.store';
import { NuevaConsultaDialog } from '../../../../clinical/presentation/components/nueva-consulta-dialog/nueva-consulta-dialog';
import { NuevaCitaDialog } from '../../../../clinical/presentation/components/nueva-cita-dialog/nueva-cita-dialog';
import { RegistrarPacienteDialog } from '../../../../clinical/presentation/components/registrar-paciente-dialog/registrar-paciente-dialog';

@Component({
  selector: 'app-dashboard',
  imports: [NgClass, MatIconModule, MatButtonModule, MatDialogModule, TranslatePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  store          = inject(ClinicalStore);
  private dialog = inject(MatDialog);

  stats = [
    { labelKey: 'dashboard.stats.todayAppointments', value: 24,  delta: '+12%', positive: true,  icon: 'event_note',     color: '#3B82F6', bg: '#EFF6FF' },
    { labelKey: 'dashboard.stats.activePatients',    value: 342, delta: '+8%',  positive: true,  icon: 'pets',           color: '#8B5CF6', bg: '#F5F3FF' },
    { labelKey: 'dashboard.stats.hospitalized',      value: 8,   delta: '-3%',  positive: false, icon: 'local_hospital', color: '#F97316', bg: '#FFF7ED' },
    { labelKey: 'dashboard.stats.vaccinesApplied',   value: 156, delta: '+15%', positive: true,  icon: 'vaccines',       color: '#22C55E', bg: '#F0FDF4' },
  ];

  activities = [
    { icon: 'add_circle',    color: '#06B6D4', bg: '#E0F2FE', titleKey: 'dashboard.activity.items.newConsult',      subtitle: 'Max - Control General',      time: 'Hace 15 minutos' },
    { icon: 'check_circle',  color: '#22C55E', bg: '#DCFCE7', titleKey: 'dashboard.activity.items.vaccineApplied',  subtitle: 'Luna - Antirrábica',         time: 'Hace 1 hora' },
    { icon: 'person_add',    color: '#8B5CF6', bg: '#F5F3FF', titleKey: 'dashboard.activity.items.newClient',       subtitle: 'Ana Martínez',               time: 'Hace 2 horas' },
    { icon: 'description',   color: '#F97316', bg: '#FFF7ED', titleKey: 'dashboard.activity.items.historyUpdated',  subtitle: 'Rocky - Cirugía programada', time: 'Hace 3 horas' },
    { icon: 'notifications', color: '#EF4444', bg: '#FEF2F2', titleKey: 'dashboard.activity.items.pendingReminder', subtitle: 'Vacuna próxima - Toby',      time: 'Hace 4 horas' },
  ];

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