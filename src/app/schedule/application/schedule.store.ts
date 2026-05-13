import { Injectable, inject, signal, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { startWith, map } from 'rxjs';
import { CitaDisplay, CalCell, CalChip } from '../domain/model/cita.model';
import { ScheduleService } from '../infrastructure/services/schedule.service';
import { TranslateService } from '@ngx-translate/core';

const CHIP: Record<string, { bg: string; text: string }> = {
  PENDIENTE:  { bg: '#FEF9C3', text: '#92400E' },
  CONFIRMADA: { bg: '#DBEAFE', text: '#1E40AF' },
  ATENDIDA:   { bg: '#DCFCE7', text: '#166534' },
  CANCELADA:  { bg: '#F1F5F9', text: '#64748B' },
};

@Injectable({ providedIn: 'root' })
export class ScheduleStore {
  private svc       = inject(ScheduleService);
  private translate = inject(TranslateService);

  readonly appointments = signal<CitaDisplay[]>([]);
  readonly currentDate  = signal(new Date());
  readonly loading      = signal(true);

  private readonly lang = toSignal(
    this.translate.onLangChange.pipe(
      startWith(null),
      map(() => this.translate.currentLang ?? 'es')
    ),
    { initialValue: this.translate.currentLang ?? 'es' }
  );

  readonly monthLabel = computed(() => {
    this.lang();
    const d = this.currentDate();
    const month = this.translate.instant(`schedule.months.${d.getMonth()}`);
    return this.translate.instant('schedule.monthLabel', { month, year: d.getFullYear() });
  });

  readonly todayLabel = computed(() => {
    this.lang();
    const t = new Date();
    const month = this.translate.instant(`schedule.months.${t.getMonth()}`);
    return this.translate.instant('schedule.todayLabel', { day: t.getDate(), month });
  });

  readonly todayCitas = computed(() => {
    const today = new Date().toISOString().split('T')[0];
    return this.appointments().filter(a => a.date === today);
  });

  readonly weeks = computed(() => this.buildCalendar(this.currentDate(), this.appointments()));

  constructor() { this.load(); }

  reload() { this.loading.set(true); this.load(); }

  private load() {
    this.svc.loadAppointments().subscribe({
      next:  apts => { this.appointments.set(apts); this.loading.set(false); },
      error: ()   => this.loading.set(false),
    });
  }

  prevMonth() {
    const d = this.currentDate();
    this.currentDate.set(new Date(d.getFullYear(), d.getMonth() - 1, 1));
  }

  nextMonth() {
    const d = this.currentDate();
    this.currentDate.set(new Date(d.getFullYear(), d.getMonth() + 1, 1));
  }

  private buildCalendar(date: Date, appointments: CitaDisplay[]): CalCell[][] {
    const year  = date.getFullYear();
    const month = date.getMonth();
    const first = new Date(year, month, 1);
    const last  = new Date(year, month + 1, 0);
    const today = new Date().toISOString().split('T')[0];

    // Monday-first offset: Sun(0)→6, Mon(1)→0, ... Sat(6)→5
    const offset = (first.getDay() + 6) % 7;

    const byDay = new Map<string, CitaDisplay[]>();
    for (const a of appointments) {
      const [ay, am] = a.date.split('-').map(Number);
      if (ay === year && am === month + 1) {
        const list = byDay.get(a.date) ?? [];
        list.push(a);
        byDay.set(a.date, list);
      }
    }

    const cells: CalCell[] = [];

    const prevLast = new Date(year, month, 0).getDate();
    for (let i = offset - 1; i >= 0; i--)
      cells.push({ day: prevLast - i, prev: true, apts: [] });

    for (let d = 1; d <= last.getDate(); d++) {
      const key  = `${year}-${String(month + 1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
      const apts = byDay.get(key) ?? [];
      const chips: CalChip[] = apts.map(a => {
        const c = CHIP[a.rawStatus] ?? CHIP['PENDIENTE'];
        return { label: `${a.time.slice(0, 5)} ${a.name}`, color: c.bg, text: c.text };
      });
      cells.push({ day: d, current: key === today, apts: chips });
    }

    let nd = 1;
    while (cells.length % 7 !== 0) cells.push({ day: nd++, apts: [] });

    const weeks: CalCell[][] = [];
    for (let i = 0; i < cells.length; i += 7)
      weeks.push(cells.slice(i, i + 7));
    return weeks;
  }
}