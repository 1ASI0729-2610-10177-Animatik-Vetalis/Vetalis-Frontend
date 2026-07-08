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

const METODO_COLORS: Record<string, string> = {
  'Efectivo': '#22C55E',
  'Tarjeta': '#3B82F6',
  'Transferencia': '#8B5CF6',
  'Yape': '#7C3AED',
  'Plin': '#06B6D4',
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

  activeTab = 0;

  // ── Async state ───────────────────────────────────────────────
  loading      = signal(true);
  medicamentos = signal<any[]>([]);
  inventario   = signal<any[]>([]);
  pagos        = signal<any[]>([]);

  // ── US023: Acknowledged alert IDs ────────────────────────────
  acknowledgedIds = signal<string[]>([]);

  // ── US021: Cash closing form state ───────────────────────────
  fechaCierre    = new Date().toISOString().split('T')[0];
  efectivoFisico = 0;
  cierreProcesado = false;

  // ── US026: Inventory search ───────────────────────────────────
  invSearch = '';

  constructor() { this.load(); }

  reload() { this.loading.set(true); this.cierreProcesado = false; this.load(); }

  private load() {
    this.svc.loadAll().subscribe({
      next: (d: any) => {
        this.medicamentos.set(d.medicamentos);
        // El stock vive dentro de cada medicamento (stockActual, puntoReorden).
        this.inventario.set(d.medicamentos);
        this.pagos.set(d.pagos);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  // ── US026: Inventory (cada medicamento ya trae su stock) ─────
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
    return this.inventarioConNombre.filter(i =>
      s === '' || i.nombre.toLowerCase().includes(s)
    );
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

  acknowledge(id: string) {
    this.acknowledgedIds.update(ids => [...ids, id]);
  }

  acknowledgeAll() {
    this.acknowledgedIds.update(ids => [...ids, ...this.alertasVisibles.map(i => i.id)]);
  }

  // ── US021: Cash closing ───────────────────────────────────────
  get pagosFecha(): any[] {
    // Backend: fechaPago (date-time) + metodoPago. json-server reshaped: igual.
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

  get totalSistema(): number {
    return this.pagosFecha.reduce((s, p) => s + p.monto, 0);
  }

  // ── Gráfico: ingresos por método de pago ─────────────────────
  get pagosChartData(): ChartConfiguration<'doughnut'>['data'] {
    const rows = this.totalesPorMetodo;
    return {
      labels: rows.map(r => r.metodo),
      datasets: [{
        data: rows.map(r => r.total),
        backgroundColor: rows.map(r => METODO_COLORS[r.metodo] ?? '#94A3B8'),
        borderWidth: 0,
      }],
    };
  }

  pagosChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      legend: { position: 'bottom', labels: { color: '#64748B', font: { size: 12 }, padding: 12, usePointStyle: true, pointStyle: 'circle' } },
      tooltip: {
        callbacks: {
          label: (ctx) => ` ${ctx.label}: S/ ${Number(ctx.parsed).toFixed(2)}`,
        },
      },
    },
  };

  get discrepancia(): number | null {
    if (!this.cierreProcesado) return null;
    return this.efectivoFisico - this.totalSistema;
  }

  get estadoCierre(): 'Cerrado' | 'Cerrado con Discrepancia' | null {
    if (!this.cierreProcesado) return null;
    return this.discrepancia === 0 ? 'Cerrado' : 'Cerrado con Discrepancia';
  }

  procesarCierre() { this.cierreProcesado = true; }
  resetCierre()    { this.cierreProcesado = false; this.efectivoFisico = 0; }

  // ── US026: Open add product dialog ───────────────────────────
  abrirAgregarProducto() {
    this.dialog.open(AgregarProductoDialog, {
      width: '520px',
      data: { medicamentos: this.medicamentos(), inventario: this.inventario() },
    }).afterClosed().subscribe(ok => { if (ok) this.reload(); });
  }
}
