export interface CitaDisplay {
  id: string;
  date: string;        // "2026-05-12"
  time: string;        // "09:00 AM"
  hour: number;        // 0-23
  minute: number;      // 0-59
  name: string;
  status: string;      // "Pendiente"
  rawStatus: string;   // "PENDIENTE"
  badgeClass: string;  // "badge-pendiente"
  owner: string;
  type: string;
  avatarColor: string;
  iconColor: string;
}

export interface CalChip {
  label: string;
  color: string;
  text: string;
}

export interface CalCell {
  day: number;
  prev?: boolean;
  current?: boolean;
  apts: CalChip[];
}

/** Un día dentro de la vista semanal. */
export interface WeekDay {
  date: Date;
  iso: string;
  dayNum: number;
  dayKey: string;      // 'schedule.dayMon' ...
  isToday: boolean;
}

/** Cita posicionada en la rejilla horaria (vista semana/día). */
export interface PositionedCita {
  cita: CitaDisplay;
  top: number;         // px desde el inicio de la rejilla
  height: number;      // px
}

/** Columna (un día) de la rejilla horaria con sus citas posicionadas. */
export interface DayColumn {
  day: WeekDay;
  blocks: PositionedCita[];
}
