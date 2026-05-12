import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ScheduleStore } from '../../../application/schedule.store';
import { NuevaCitaDialog } from '../../../../clinical/presentation/components/nueva-cita-dialog/nueva-cita-dialog';

@Component({
  selector: 'app-schedule',
  imports: [NgClass, MatIconModule, MatButtonModule, MatDialogModule],
  templateUrl: './schedule.html',
  styleUrl: './schedule.css'
})
export class Schedule {
  store          = inject(ScheduleStore);
  private dialog = inject(MatDialog);
  viewMode: 'Día' | 'Semana' | 'Mes' = 'Mes';
  dayNames = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

  openNuevaCita() {
    this.dialog.open(NuevaCitaDialog, { width: '520px' })
      .afterClosed().subscribe(ok => { if (ok) this.store.reload(); });
  }
}
