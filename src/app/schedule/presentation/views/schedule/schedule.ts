import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslatePipe } from '@ngx-translate/core';
import { ScheduleStore, ViewMode } from '../../../application/schedule.store';
import { DayColumn } from '../../../domain/model/cita.model';
import { NuevaCitaDialog } from '../../../../clinical/presentation/components/nueva-cita-dialog/nueva-cita-dialog';

@Component({
  selector: 'app-schedule',
  imports: [NgClass, MatIconModule, MatButtonModule, MatDialogModule, TranslatePipe],
  templateUrl: './schedule.html',
  styleUrl: './schedule.css'
})
export class Schedule {
  store          = inject(ScheduleStore);
  private dialog = inject(MatDialog);

  viewModes: Array<{ value: ViewMode; labelKey: string }> = [
    { value: 'day',   labelKey: 'schedule.viewDay'   },
    { value: 'week',  labelKey: 'schedule.viewWeek'  },
    { value: 'month', labelKey: 'schedule.viewMonth' },
  ];

  dayNameKeys = [
    'schedule.dayMon', 'schedule.dayTue', 'schedule.dayWed', 'schedule.dayThu',
    'schedule.dayFri', 'schedule.daySat', 'schedule.daySun',
  ];

  /** Columnas de la rejilla horaria: 7 en semana, 1 en día. */
  get gridColumns(): DayColumn[] {
    return this.store.viewMode() === 'day' ? [this.store.dayColumn()] : this.store.weekColumns();
  }

  get gridTemplate(): string {
    return `56px repeat(${this.gridColumns.length}, minmax(0, 1fr))`;
  }

  openNuevaCita() {
    this.dialog.open(NuevaCitaDialog, { width: '520px' })
      .afterClosed().subscribe(ok => { if (ok) this.store.reload(); });
  }
}