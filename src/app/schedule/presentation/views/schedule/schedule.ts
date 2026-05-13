import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TranslatePipe } from '@ngx-translate/core';
import { ScheduleStore } from '../../../application/schedule.store';
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

  viewMode: 'day' | 'week' | 'month' = 'month';

  viewModes: Array<{ value: 'day' | 'week' | 'month'; labelKey: string }> = [
    { value: 'day',   labelKey: 'schedule.viewDay'   },
    { value: 'week',  labelKey: 'schedule.viewWeek'  },
    { value: 'month', labelKey: 'schedule.viewMonth' },
  ];

  dayNameKeys = [
    'schedule.dayMon', 'schedule.dayTue', 'schedule.dayWed', 'schedule.dayThu',
    'schedule.dayFri', 'schedule.daySat', 'schedule.daySun',
  ];

  openNuevaCita() {
    this.dialog.open(NuevaCitaDialog, { width: '520px' })
      .afterClosed().subscribe(ok => { if (ok) this.store.reload(); });
  }
}