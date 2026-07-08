import { CitaDisplay } from '../../domain/model/cita.model';

const PASTEL: Array<{ bg: string; icon: string }> = [
  { bg: '#FEE2E2', icon: '#DC2626' },
  { bg: '#DBEAFE', icon: '#3B82F6' },
  { bg: '#DCFCE7', icon: '#16A34A' },
  { bg: '#FEF9C3', icon: '#D97706' },
  { bg: '#EDE9FE', icon: '#7C3AED' },
  { bg: '#E0F2FE', icon: '#0369A1' },
  { bg: '#FEF3C7', icon: '#B45309' },
  { bg: '#F0FDF4', icon: '#15803D' },
];

function hash(id: string): number {
  let h = 0;
  for (const c of String(id)) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h;
}

function parseHM(fechaISO: string): { hour: number; minute: number } {
  const t = (fechaISO.split('T')[1] ?? '00:00:00').slice(0, 5);
  const [h, m] = t.split(':').map(Number);
  return { hour: h || 0, minute: m || 0 };
}

function toTime(fechaISO: string): string {
  const { hour: h, minute: m } = parseHM(fechaISO);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 || 12;
  return `${String(h12).padStart(2, '0')}:${String(m).padStart(2, '0')} ${ampm}`;
}

const STATUS_LABEL: Record<string, string> = {
  PENDIENTE: 'Pendiente', CONFIRMADA: 'Confirmada',
  CANCELADA: 'Cancelada', ATENDIDA: 'Atendida',
};

const STATUS_BADGE: Record<string, string> = {
  PENDIENTE: 'badge-pendiente', CONFIRMADA: 'badge-confirmada',
  CANCELADA: 'badge-cancelada', ATENDIDA: 'badge-completada',
};

export class CitaAssembler {
  static toDomain(raw: any, mascotas: any[], clientes: any[]): CitaDisplay {
    const m = mascotas.find(x => String(x.id) === String(raw.mascotaId));
    const c = clientes.find(x => String(x.id) === String(m?.clienteId));
    const p = PASTEL[hash(raw.mascotaId) % PASTEL.length];
    const { hour, minute } = parseHM(raw.fecha);
    return {
      id:          raw.id,
      date:        raw.fecha.split('T')[0],
      time:        toTime(raw.fecha),
      hour,
      minute,
      name:        m?.nombre ?? '—',
      status:      STATUS_LABEL[raw.estado] ?? raw.estado,
      rawStatus:   raw.estado,
      badgeClass:  STATUS_BADGE[raw.estado] ?? 'badge-pendiente',
      owner:       c?.nombre ?? '—',
      type:        raw.motivo,
      avatarColor: p.bg,
      iconColor:   p.icon,
    };
  }

  static toDomainList(citas: any[], mascotas: any[], clientes: any[]): CitaDisplay[] {
    return citas.map(a => this.toDomain(a, mascotas, clientes));
  }
}
