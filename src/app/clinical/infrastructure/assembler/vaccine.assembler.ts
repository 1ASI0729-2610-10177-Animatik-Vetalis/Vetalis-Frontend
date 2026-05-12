import { Vaccine } from '../../domain/model/vaccine.model';

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

export class VaccineAssembler {
  static toDomain(raw: any, mascotas: any[], razas: any[], tipos: any[]): Vaccine {
    const m = mascotas.find(x => x.id === raw.mascotaId);
    const r = razas.find(x => x.id === m?.razaId);
    const t = tipos.find(x => x.id === raw.tipoVacunaId);
    return {
      id:                 raw.id,
      mascotaId:          raw.mascotaId,
      patientName:        m?.nombre ?? '—',
      patientBreed:       r?.nombre ?? '—',
      patientAvatarColor: COLORS[hash(raw.mascotaId) % COLORS.length],
      vaccineName:        t?.nombre ?? '—',
      vaccineDesc:        t?.descripcion ?? '—',
      lastApplied:        fmt(raw.fechaAplicacion),
      nextDose:           fmt(raw.proximaDosis),
      nextDoseHighlight:  raw.estado === 'Vencida',
      status:             raw.estado,
    };
  }

  static toDomainList(vacunas: any[], mascotas: any[], razas: any[], tipos: any[]): Vaccine[] {
    return vacunas.map(v => this.toDomain(v, mascotas, razas, tipos));
  }
}
