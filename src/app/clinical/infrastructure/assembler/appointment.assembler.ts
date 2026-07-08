import { Appointment } from '../../domain/model/appointment.model';

const COLORS = ['#F97316','#7C3AED','#06B6D4','#16A34A','#EF4444','#8B5CF6','#F59E0B','#EC4899'];

function hash(id: string): number {
  let h = 0;
  for (const c of String(id)) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h;
}

function toTime(fechaISO: string): string {
  const t = (fechaISO.split('T')[1] ?? '00:00:00').slice(0, 5);
  const [h, m] = t.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 || 12;
  return `${String(h12).padStart(2, '0')}:${String(m).padStart(2, '0')} ${ampm}`;
}

const STATUS_MAP: Record<string, string> = {
  PENDIENTE: 'Pendiente', CONFIRMADA: 'Confirmada',
  CANCELADA: 'Cancelada', ATENDIDA: 'Atendida',
};

export class AppointmentAssembler {
  static toDomain(raw: any, mascotas: any[], clientes: any[]): Appointment {
    const m = mascotas.find(x => String(x.id) === String(raw.mascotaId));
    const c = clientes.find(x => String(x.id) === String(m?.clienteId));
    return {
      id:          raw.id,
      date:        raw.fecha.split('T')[0],
      patientName: m?.nombre ?? '—',
      type:        raw.motivo,
      ownerName:   c?.nombre ?? '—',
      time:        toTime(raw.fecha),
      status:      STATUS_MAP[raw.estado] ?? raw.estado,
      avatarColor: COLORS[hash(String(raw.mascotaId)) % COLORS.length],
    };
  }

  static toDomainList(citas: any[], mascotas: any[], clientes: any[]): Appointment[] {
    return citas.map(a => this.toDomain(a, mascotas, clientes));
  }
}
