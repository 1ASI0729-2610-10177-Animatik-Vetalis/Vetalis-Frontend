import { Injectable, inject, signal, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { startWith, map } from 'rxjs';
import { CitaDisplay, CalCell, CalChip, WeekDay, DayColumn, PositionedCita } from '../domain/model/cita.model';
import { ScheduleService } from '../infrastructure/services/schedule.service';
import { TranslateService } from '@ngx-translate/core';

const CHIP: Record<string, { bg: string; text: string }> = {
  PENDIENTE:  { bg: '#FEF9C3', text: '#92400E' },
  CONFIRMADA: { bg: '#DBEAFE', text: '#1E40AF' },
  ATENDIDA:   { bg: '#DCFCE7', text: '#166534' },
  CANCELADA:  { bg: '#F1F5F9', text: '#64748B' },
};

// Rejilla horaria: 08:00 → 19:00 (12 filas de 1h).
const START_HOUR = 8;
const HOURS_COUNT = 12;
const HOUR_HEIGHT = 56;          // px por hora
const DEFAULT_DUR_MIN = 45;      // duración por defecto de una cita

const DAY_KEYS = [
  'schedule.dayMon', 'schedule.dayTue', 'schedule.dayWed', 'schedule.dayThu',
  'schedule.dayFri', 'schedule.daySat', 'schedule.daySun',
];

function toISO(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function addDays(d: Date, n: number): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
}
function startOfWeek(d: Date): Date {           // lunes como primer día
  return addDays(d, -((d.getDay() + 6) % 7));
}

export type ViewMode = 'day' | 'week' | 'month';

@Injectable({ providedIn: 'root' })
export class ScheduleStore {
  private svc       = inject(ScheduleService);
  private translate = inject(TranslateService);

  readonly appointments = signal<CitaDisplay[]>([]);
  readonly currentDate  = signal(new Date());
  readonly loading      = signal(true);
  readonly viewMode     = signal<ViewMode>('week');

  readonly dayKeys   = DAY_KEYS;
  readonly gridHeight = HOURS_COUNT * HOUR_HEIGHT;
  readonly hours = Array.from({ length: HOURS_COUNT }, (_, i) => {
    const h = START_HOUR + i;
    return { hour: h, label: `${String(h).padStart(2, '0')}:00` };
  });

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

  /** Etiqueta de cabecera según la vista activa. */
  readonly headerLabel = computed(() => {
    this.lang();
    const mode = this.viewMode();
    if (mode === 'month') return this.monthLabel();
    if (mode === 'day') {
      const d = this.currentDate();
      const dayName = this.translate.instant(DAY_KEYS[(d.getDay() + 6) % 7]);
      const month = this.translate.instant(`schedule.months.${d.getMonth()}`);
      return `${dayName} ${d.getDate()} ${month} ${d.getFullYear()}`;
    }
    const days = this.weekDays();
    const a = days[0].date, b = days[6].date;
    const mA = this.translate.instant(`schedule.months.${a.getMonth()}`);
    const mB = this.translate.instant(`schedule.months.${b.getMonth()}`);
    if (a.getMonth() === b.getMonth()) {
      return `${a.getDate()} – ${b.getDate()} ${mA} ${b.getFullYear()}`;
    }
    return `${a.getDate()} ${mA.slice(0, 3)} – ${b.getDate()} ${mB.slice(0, 3)} ${b.getFullYear()}`;
  });

  readonly todayLabel = computed(() => {
    this.lang();
    const t = new Date();
    const month = this.translate.instant(`schedule.months.${t.getMonth()}`);
    return this.translate.instant('schedule.todayLabel', { day: t.getDate(), month });
  });

  readonly todayCitas = computed(() => {
    const today = toISO(new Date());
    return this.appointments().filter(a => a.date === today);
  });

  // ── Vista MES ─────────────────────────────────────────────────
  readonly weeks = computed(() => this.buildCalendar(this.currentDate(), this.appointments()));

  // ── Vista SEMANA ──────────────────────────────────────────────
  readonly weekDays = computed<WeekDay[]>(() => {
    const monday = startOfWeek(this.currentDate());
    const todayISO = toISO(new Date());
    return Array.from({ length: 7 }, (_, i) => {
      const date = addDays(monday, i);
      const iso = toISO(date);
      return { date, iso, dayNum: date.getDate(), dayKey: DAY_KEYS[i], isToday: iso === todayISO };
    });
  });

  readonly weekColumns = computed<DayColumn[]>(() => {
    const apps = this.appointments();
    return this.weekDays().map(day => ({
      day,
      blocks: this.blocksFor(apps, day.iso),
    }));
  });

  // ── Vista DÍA ─────────────────────────────────────────────────
  readonly dayColumn = computed<DayColumn>(() => {
    const d = this.currentDate();
    const iso = toISO(d);
    const day: WeekDay = {
      date: d, iso, dayNum: d.getDate(),
      dayKey: DAY_KEYS[(d.getDay() + 6) % 7],
      isToday: iso === toISO(new Date()),
    };
    return { day, blocks: this.blocksFor(this.appointments(), iso) };
  });

  constructor() { this.load(); }

  reload() { this.loading.set(true); this.load(); }

  setView(mode: ViewMode) { this.viewMode.set(mode); }
  goToday()               { this.currentDate.set(new Date()); }

  prev() { this.shift(-1); }
  next() { this.shift(1); }

  private shift(dir: number) {
    const d = this.currentDate();
    switch (this.viewMode()) {
      case 'month': this.currentDate.set(new Date(d.getFullYear(), d.getMonth() + dir, 1)); break;
      case 'week':  this.currentDate.set(addDays(d, 7 * dir)); break;
      default:      this.currentDate.set(addDays(d, dir)); break;
    }
  }

  private blocksFor(apps: CitaDisplay[], iso: string): PositionedCita[] {
    const maxTop = this.gridHeight - (DEFAULT_DUR_MIN / 60) * HOUR_HEIGHT;
    return apps
      .filter(a => a.date === iso)
      .sort((x, y) => (x.hour * 60 + x.minute) - (y.hour * 60 + y.minute))
      .map(a => {
        const startMin = (a.hour - START_HOUR) * 60 + a.minute;
        const top = Math.max(0, Math.min((startMin / 60) * HOUR_HEIGHT, maxTop));
        return { cita: a, top, height: (DEFAULT_DUR_MIN / 60) * HOUR_HEIGHT };
      });
  }

  private load() {
    this.svc.loadAppointments().subscribe({
      next:  apts => { this.appointments.set(apts); this.loading.set(false); },
      error: ()   => this.loading.set(false),
    });
  }

  private buildCalendar(date: Date, appointments: CitaDisplay[]): CalCell[][] {
    const year  = date.getFullYear();
    const month = date.getMonth();
    const last  = new Date(year, month + 1, 0);
    const today = toISO(new Date());

    const offset = (new Date(year, month, 1).getDay() + 6) % 7;

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
      const key  = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
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
