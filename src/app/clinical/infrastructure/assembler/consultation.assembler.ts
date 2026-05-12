import { Consultation } from '../../domain/model/consultation.model';

const COLORS = ['#F97316','#7C3AED','#06B6D4','#16A34A','#EF4444','#8B5CF6','#F59E0B','#EC4899'];
const MN = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];

function hash(id: string): number {
  let h = 0;
  for (const c of id) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h;
}

function fmt(fecha: string): string {
  const [y, m, d] = fecha.split('-');
  return `${parseInt(d)} ${MN[parseInt(m) - 1]} ${y}`;
}

export class ConsultationAssembler {
  static toDomain(raw: any, mascotas: any[], clientes: any[], razas: any[], vets: any[]): Consultation {
    const m = mascotas.find(x => x.id === raw.mascotaId);
    const c = clientes.find(x => x.id === m?.clienteId);
    const r = razas.find(x => x.id === m?.razaId);
    const v = vets.find(x => x.id === raw.veterinarioId);
    return {
      id:                 raw.id,
      mascotaId:          raw.mascotaId,
      rawDate:            raw.fecha,
      patientName:        m?.nombre ?? '—',
      patientBreed:       r?.nombre ?? '—',
      patientAvatarColor: COLORS[hash(raw.mascotaId) % COLORS.length],
      clientName:         c?.nombre ?? '—',
      clientPhone:        c?.telefono ?? '—',
      type:               raw.tipo,
      diagnosis:          raw.evaluacion,
      date:               fmt(raw.fecha),
      time:               raw.hora,
      status:             raw.estado,
      subjetivo:          raw.subjetivo,
      objetivo:           raw.objetivo,
      plan:               raw.plan,
      veterinario:        v?.nombre ?? 'Dr. Carlos Méndez',
    };
  }

  static toDomainList(consultas: any[], mascotas: any[], clientes: any[], razas: any[], vets: any[] = []): Consultation[] {
    return consultas.map(c => this.toDomain(c, mascotas, clientes, razas, vets));
  }
}
