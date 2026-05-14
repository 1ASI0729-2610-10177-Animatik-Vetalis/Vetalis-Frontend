import { Component, inject, signal } from '@angular/core';
import { NgClass, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslatePipe } from '@ngx-translate/core';
import { AdminService } from '../../../infrastructure/services/admin.service';
import { AgregarProductoDialog } from '../../components/agregar-producto-dialog/agregar-producto-dialog';

@Component({
  selector: 'app-admin-dashboard',
  imports: [NgClass, DecimalPipe, FormsModule, MatIconModule, MatButtonModule, MatTabsModule, MatDialogModule, TranslatePipe],
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
        this.inventario.set(d.inventario);
        this.pagos.set(d.pagos);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  // ── US026: Inventory with names ───────────────────────────────
  get inventarioConNombre(): any[] {
    return this.inventario().map(item => {
      const med = this.medicamentos().find(m => String(m.id) === String(item.medicamentoId));
      return { ...item, nombre: med?.nombre ?? '—', descripcion: med?.descripcion ?? '', unidad: med?.unidad ?? '' };
    });
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
    return this.pagos().filter(p => p.fecha === this.fechaCierre && p.estado === 'Pagado');
  }

  get totalesPorMetodo(): { metodo: string; total: number; count: number }[] {
    const map = new Map<string, { total: number; count: number }>();
    for (const p of this.pagosFecha) {
      const m = p.metodo ?? 'Sin método';
      const cur = map.get(m) ?? { total: 0, count: 0 };
      map.set(m, { total: cur.total + p.monto, count: cur.count + 1 });
    }
    return Array.from(map.entries()).map(([metodo, v]) => ({ metodo, ...v }));
  }

  get totalSistema(): number {
    return this.pagosFecha.reduce((s, p) => s + p.monto, 0);
  }

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
