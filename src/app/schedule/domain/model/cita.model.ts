export interface CitaDisplay {
  id: string;
  date: string;        // "2026-05-12"
  time: string;        // "09:00 AM"
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
