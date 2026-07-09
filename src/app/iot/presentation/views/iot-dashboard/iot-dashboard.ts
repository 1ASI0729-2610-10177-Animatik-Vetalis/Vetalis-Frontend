import { Component, inject, signal } from '@angular/core';
import { NgClass, DecimalPipe, SlicePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslatePipe } from '@ngx-translate/core';
import { IotService } from '../../../infrastructure/services/iot.service';
import { DispensadorDialog } from '../../components/dispensador-dialog/dispensador-dialog';
import { ClinicalStore } from '../../../../clinical/application/clinical.store';

@Component({
  selector: 'app-iot-dashboard',
  imports: [NgClass, DecimalPipe, SlicePipe, MatIconModule, MatButtonModule, MatDialogModule, TranslatePipe],
  templateUrl: './iot-dashboard.html',
  styleUrl: './iot-dashboard.css',
})
export class IotDashboard {
  private svc         = inject(IotService);
  private dialog      = inject(MatDialog);
  private snack       = inject(MatSnackBar);
  readonly clinicStore = inject(ClinicalStore);

  loading      = signal(true);
  dispensadores = signal<any[]>([]);
  dispensandoId = signal<number | null>(null);
  cantidadMap   = new Map<number, number>();

  constructor() { this.load(); }

  private load() {
    this.loading.set(true);
    this.svc.getAll().subscribe({
      next: d => { this.dispensadores.set(d); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }

  reload() { this.load(); }

  estadoClass(estado: string): string {
    const map: Record<string, string> = { 'ACTIVO': 'badge-activo', 'INACTIVO': 'badge-inactivo', 'MANTENIMIENTO': 'badge-mantenimiento' };
    return map[estado] ?? '';
  }

  nivelColor(nivel: number): string {
    if (nivel <= 10) return '#EF4444';
    if (nivel <= 30) return '#F59E0B';
    return '#22C55E';
  }

  getCantidad(id: number): number {
    return this.cantidadMap.get(id) ?? 0;
  }

  setCantidad(id: number, val: number) {
    this.cantidadMap.set(id, val);
  }

  dispensar(dispensador: any) {
    const cantidad = this.cantidadMap.get(dispensador.id) ?? 0;
    if (cantidad <= 0) {
      this.snack.open('Ingresa una cantidad mayor a 0', '', { duration: 3000 });
      return;
    }
    if (cantidad > dispensador.nivelAlimento) {
      this.snack.open('Cantidad supera el nivel de alimento disponible', '', { duration: 3000 });
      return;
    }
    this.dispensandoId.set(dispensador.id);
    this.svc.dispensar(dispensador.id, cantidad).subscribe({
      next: () => {
        this.snack.open(`Dispensado ${cantidad}g correctamente`, 'OK', { duration: 3000 });
        this.cantidadMap.delete(dispensador.id);
        this.dispensandoId.set(null);
        this.load();
      },
      error: () => { this.snack.open('Error al dispensar', '', { duration: 3000 }); this.dispensandoId.set(null); },
    });
  }

  openAgregar() {
    this.dialog.open(DispensadorDialog, { width: '500px' })
      .afterClosed().subscribe(ok => { if (ok) this.reload(); });
  }

  openEditar(dispensador: any) {
    this.dialog.open(DispensadorDialog, { width: '500px', data: { dispensador } })
      .afterClosed().subscribe(ok => { if (ok) this.reload(); });
  }

  eliminar(dispensador: any) {
    if (!confirm(`¿Eliminar el dispensador ${dispensador.numeroSerie}?`)) return;
    this.svc.delete(dispensador.id).subscribe({
      next: () => { this.snack.open('Dispensador eliminado', 'OK', { duration: 3000 }); this.reload(); },
      error: () => this.snack.open('Error al eliminar', '', { duration: 3000 }),
    });
  }

  getPatientName(mascotaId: number): string {
    const p = this.clinicStore.patients().find(p => String(p.id) === String(mascotaId));
    return p ? `${p.name} (${p.owner})` : `Paciente #${mascotaId}`;
  }

  get stats() {
    const ds = this.dispensadores();
    return [
      { labelKey: 'iot.stats.total',       value: ds.length,                                    icon: 'router',       color: '#3B82F6', bg: '#EFF6FF' },
      { labelKey: 'iot.stats.active',      value: ds.filter(d => d.estado === 'ACTIVO').length, icon: 'check_circle', color: '#22C55E', bg: '#F0FDF4' },
      { labelKey: 'iot.stats.low',         value: ds.filter(d => d.nivelAlimento <= 30).length, icon: 'warning',      color: '#F59E0B', bg: '#FFFBEB' },
      { labelKey: 'iot.stats.maintenance', value: ds.filter(d => d.estado === 'MANTENIMIENTO').length, icon: 'build', color: '#8B5CF6', bg: '#F5F3FF' },
    ];
  }
}
