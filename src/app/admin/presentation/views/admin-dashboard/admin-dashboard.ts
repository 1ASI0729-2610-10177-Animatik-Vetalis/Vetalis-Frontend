import { Component, inject, signal } from '@angular/core';
import { NgClass, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslatePipe } from '@ngx-translate/core';
import { ChartConfiguration } from 'chart.js';
import { AdminService } from '../../../infrastructure/services/admin.service';
import { ChartComponent } from '../../../../shared/presentation/components/chart/chart';
import { AgregarProductoDialog } from '../../components/agregar-producto-dialog/agregar-producto-dialog';
import { RegistrarPagoDialog } from '../../components/registrar-pago-dialog/registrar-pago-dialog';

const METODO_COLORS: Record<string, string> = {
  'Efectivo': '#22C55E', 'Tarjeta': '#3B82F6', 'Transferencia': '#8B5CF6',
  'Yape': '#7C3AED', 'Plin': '#06B6D4',
};

@Component({
  selector: 'app-admin-dashboard',
  imports: [NgClass, DecimalPipe, FormsModule, MatIconModule, MatButtonModule, MatTabsModule, MatDialogModule, TranslatePipe, ChartComponent],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {
  private svc    = inject(AdminService);
  private dialog = inject(MatDialog);

  Math = Math;
  activeTab = 0;

  loading      = signal(true);
  medicamentos = signal<any[]>([]);
  inventario   = signal<any[]>([]);
  pagos        = signal<any[]>([]);
  mascotas     = signal<any[]>([]);
  clientes     = signal<any[]>([]);
  consultas    = signal<any[]>([]);
  veterinarios = signal<any[]>([]);

  acknowledgedIds = signal<string[]>([]);

  // US021: Cash closing
  fechaCierre     = new Date().toISOString().split('T')[0];
  efectivoFisico  = 0;
  cierreProcesado = false;

  // US026: Inventory search
  invSearch = '';

  // US024/028: Payments
  pagoSearch      = '';
  pagoDateFilter  = '';

  // US029: Reports
  reportStart = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0];
  reportEnd   = new Date().toISOString().split('T')[0];

  // US030: Commissions
  commissionRate = 20;

  constructor() { this.load(); }

  reload() { this.loading.set(true); this.cierreProcesado = false; this.load(); }

  private load() {
    this.svc.loadAll().subscribe({
      next: (d: any) => {
        this.medicamentos.set(d.medicamentos ?? []);
        this.inventario.set(d.medicamentos ?? []);
        this.pagos.set(d.pagos ?? []);
        this.mascotas.set(d.mascotas ?? []);
        this.clientes.set(d.clientes ?? []);
        this.consultas.set(d.consultas ?? []);
        this.veterinarios.set(d.veterinarios ?? []);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  // ── US026: Inventory ──────────────────────────────────────────
  get inventarioConNombre(): any[] {
    return this.inventario().map(item => ({
      ...item,
      nombre:      item.nombre ?? '—',
      descripcion: item.descripcion ?? '',
      unidad:      item.unidad ?? '—',
    }));
  }

  get inventarioFiltrado(): any[] {
    const s = this.invSearch.toLowerCase();
    return this.inventarioConNombre.filter(i => s === '' || i.nombre.toLowerCase().includes(s));
  }

  stockStatus(item: any): string {
    if (item.stockActual === 0)               return 'Sin Stock';
    if (item.stockActual <= item.puntoReorden) return 'Stock Bajo';
    return 'Normal';
  }

  stockStatusKey(item: any): string {
    if (item.stockActual === 0)               return 'admin.inventory.statusZero';
    if (item.stockActual <= item.puntoReorden) return 'admin.inventory.statusLow';
    return 'admin.inventory.statusNormal';
  }

  // ── US023: Low stock alerts ───────────────────────────────────
  get alertasStock(): any[] {
    return this.inventarioConNombre.filter(i => i.stockActual <= i.puntoReorden);
  }

  get alertasVisibles(): any[] {
    const acked = this.acknowledgedIds();
    return this.alertasStock.filter(i => !acked.includes(i.id));
  }

  acknowledge(id: string) { this.acknowledgedIds.update(ids => [...ids, id]); }
  acknowledgeAll()        { this.acknowledgedIds.update(ids => [...ids, ...this.alertasVisibles.map(i => i.id)]); }

  // ── US021: Cash closing ───────────────────────────────────────
  get pagosFecha(): any[] {
    return this.pagos().filter(p =>
      (p.fechaPago ?? p.fecha ?? '').split('T')[0] === this.fechaCierre && p.estado === 'Pagado'
    );
  }

  get totalesPorMetodo(): { metodo: string; total: number; count: number }[] {
    const map = new Map<string, { total: number; count: number }>();
    for (const p of this.pagosFecha) {
      const m = p.metodoPago ?? p.metodo ?? 'Sin método';
      const cur = map.get(m) ?? { total: 0, count: 0 };
      map.set(m, { total: cur.total + p.monto, count: cur.count + 1 });
    }
    return Array.from(map.entries()).map(([metodo, v]) => ({ metodo, ...v }));
  }

  get totalSistema(): number { return this.pagosFecha.reduce((s, p) => s + p.monto, 0); }

  get pagosChartData(): ChartConfiguration<'doughnut'>['data'] {
    const rows = this.totalesPorMetodo;
    return {
      labels: rows.map(r => r.metodo),
      datasets: [{ data: rows.map(r => r.total), backgroundColor: rows.map(r => METODO_COLORS[r.metodo] ?? '#94A3B8'), borderWidth: 0 }],
    };
  }

  pagosChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true, maintainAspectRatio: false, cutout: '60%',
    plugins: {
      legend: { position: 'bottom', labels: { color: '#64748B', font: { size: 12 }, padding: 12, usePointStyle: true, pointStyle: 'circle' } },
      tooltip: { callbacks: { label: (ctx) => ` ${ctx.label}: S/ ${Number(ctx.parsed).toFixed(2)}` } },
    },
  };

  get discrepancia(): number | null { return this.cierreProcesado ? this.efectivoFisico - this.totalSistema : null; }
  get estadoCierre(): 'Cerrado' | 'Cerrado con Discrepancia' | null {
    if (!this.cierreProcesado) return null;
    return this.discrepancia === 0 ? 'Cerrado' : 'Cerrado con Discrepancia';
  }
  procesarCierre() { this.cierreProcesado = true; }
  resetCierre()    { this.cierreProcesado = false; this.efectivoFisico = 0; }

  // ── US026: Add product ────────────────────────────────────────
  abrirAgregarProducto() {
    this.dialog.open(AgregarProductoDialog, {
      width: '520px',
      data: { medicamentos: this.medicamentos(), inventario: this.inventario() },
    }).afterClosed().subscribe(ok => { if (ok) this.reload(); });
  }

  // ── US024/027/028: Payments ───────────────────────────────────
  get pagosFiltered(): any[] {
    const s = this.pagoSearch.toLowerCase();
    return this.pagos()
      .filter(p => {
        const dateOk = !this.pagoDateFilter || (p.fechaPago ?? p.fecha ?? '').split('T')[0] === this.pagoDateFilter;
        const m = this.mascotas().find(x => String(x.id) === String(p.mascotaId));
        const name = (m?.nombre ?? '').toLowerCase();
        const searchOk = s === '' || name.includes(s) || String(p.id).includes(s);
        return dateOk && searchOk;
      })
      .sort((a, b) => (b.fechaPago ?? b.fecha ?? '') > (a.fechaPago ?? a.fecha ?? '') ? 1 : -1);
  }

  getMascotaNombre(mascotaId: any): string {
    return this.mascotas().find(m => String(m.id) === String(mascotaId))?.nombre ?? '—';
  }

  getClienteNombre(mascotaId: any): string {
    const m = this.mascotas().find(x => String(x.id) === String(mascotaId));
    return this.clientes().find(c => String(c.id) === String(m?.clienteId))?.nombre ?? '—';
  }

  pagoFechaFmt(p: any): string {
    const s = (p.fechaPago ?? p.fecha ?? '').split('T')[0];
    if (!s) return '—';
    const [y, mo, d] = s.split('-');
    return `${d}/${mo}/${y}`;
  }

  voidPago(pago: any) {
    if (!confirm(`¿Anular el pago #${pago.id}? Esta acción quedará registrada en auditoría.`)) return;
    this.svc.voidPago(pago.id, { ...pago, estado: 'Anulado' }).subscribe({
      next: () => this.reload(),
      error: () => {},
    });
  }

  abrirRegistrarPago() {
    this.dialog.open(RegistrarPagoDialog, {
      width: '620px',
      data: { mascotas: this.mascotas(), clientes: this.clientes() },
    }).afterClosed().subscribe(ok => { if (ok) this.reload(); });
  }

  // ── US029: Reports ────────────────────────────────────────────
  get pagosReporte(): any[] {
    return this.pagos().filter(p => {
      const date = (p.fechaPago ?? p.fecha ?? '').split('T')[0];
      return p.estado === 'Pagado' && date >= this.reportStart && date <= this.reportEnd;
    });
  }

  get reporteTotalIngresos(): number  { return this.pagosReporte.reduce((s, p) => s + (p.monto ?? 0), 0); }
  get reporteTransacciones(): number  { return this.pagosReporte.length; }
  get reporteTicketPromedio(): number { return this.reporteTransacciones ? this.reporteTotalIngresos / this.reporteTransacciones : 0; }

  get reportePorMetodo(): { metodo: string; total: number; count: number }[] {
    const map = new Map<string, { total: number; count: number }>();
    for (const p of this.pagosReporte) {
      const m = p.metodoPago ?? 'Sin método';
      const cur = map.get(m) ?? { total: 0, count: 0 };
      map.set(m, { total: cur.total + (p.monto ?? 0), count: cur.count + 1 });
    }
    return Array.from(map.entries()).map(([metodo, v]) => ({ metodo, ...v })).sort((a, b) => b.total - a.total);
  }

  get reporteChartData(): ChartConfiguration<'bar'>['data'] {
    const byDay = new Map<string, number>();
    for (const p of this.pagosReporte) {
      const d = (p.fechaPago ?? p.fecha ?? '').split('T')[0];
      byDay.set(d, (byDay.get(d) ?? 0) + (p.monto ?? 0));
    }
    const sorted = Array.from(byDay.entries()).sort(([a], [b]) => a.localeCompare(b));
    return {
      labels: sorted.map(([d]) => { const [,mo,dy] = d.split('-'); return `${dy}/${mo}`; }),
      datasets: [{ label: 'Ingresos S/', data: sorted.map(([,v]) => v), backgroundColor: '#06B6D4', borderRadius: 4 }],
    };
  }

  reporteChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { callbacks: { label: (ctx) => ` S/ ${Number(ctx.parsed.y).toFixed(2)}` } } },
    scales: { y: { ticks: { color: '#64748B' }, grid: { color: '#F1F5F9' } }, x: { ticks: { color: '#64748B' } } },
  };

  exportarReporte() {
    const rows = [['Fecha', 'Paciente', 'Cliente', 'Descripción', 'Método', 'Monto']];
    for (const p of this.pagosReporte) {
      rows.push([
        (p.fechaPago ?? p.fecha ?? '').split('T')[0],
        this.getMascotaNombre(p.mascotaId),
        this.getClienteNombre(p.mascotaId),
        p.descripcion ?? '',
        p.metodoPago ?? '',
        String(p.monto ?? 0),
      ]);
    }
    const csv = rows.map(r => r.map(c => `"${c}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `reporte_${this.reportStart}_${this.reportEnd}.csv`; a.click();
    URL.revokeObjectURL(url);
  }

  // ── US030: Commissions ────────────────────────────────────────
  get comisionesPorVet(): { id: any; nombre: string; consultas: number; total: number; comision: number }[] {
    const vets = this.veterinarios();
    return vets.map(v => {
      const consultasVet = this.consultas().filter(c => String(c.veterinarioId) === String(v.id));
      const pagosVet = this.pagos().filter(p =>
        p.estado === 'Pagado' &&
        consultasVet.some(c => String(c.mascotaId) === String(p.mascotaId) &&
          (c.fecha ?? '').split('T')[0] === (p.fechaPago ?? p.fecha ?? '').split('T')[0])
      );
      const total    = pagosVet.reduce((s, p) => s + (p.monto ?? 0), 0);
      const comision = total * (this.commissionRate / 100);
      return { id: v.id, nombre: v.nombre ?? `Vet #${v.id}`, consultas: consultasVet.length, total, comision };
    }).filter(v => v.consultas > 0 || vets.length <= 3);
  }
}
