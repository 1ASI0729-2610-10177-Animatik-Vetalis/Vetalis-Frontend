import { Patient } from '../../domain/model/patient.model';

const COLORS = ['#F97316','#7C3AED','#06B6D4','#16A34A','#EF4444','#8B5CF6','#F59E0B','#EC4899'];

function hash(id: string): number {
  let h = 0;
  for (const c of String(id)) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h;
}

function calcAge(dob: string): string {
  const months = Math.floor((Date.now() - new Date(dob).getTime()) / (1000 * 60 * 60 * 24 * 30.44));
  if (months < 12) return `${months} ${months === 1 ? 'mes' : 'meses'}`;
  const yrs = Math.floor(months / 12);
  return `${yrs} ${yrs === 1 ? 'año' : 'años'}`;
}

export class PatientAssembler {
  static toDomain(raw: any, clientes: any[], especies: any[], razas: any[]): Patient {
    const cliente = clientes.find(c => String(c.id) === String(raw.clienteId));
    const raza    = razas.find(r => String(r.id) === String(raw.razaId));
    // El backend no expone especieId en mascota: la especie sale vía raza.especieId.
    const especie = especies.find(e => String(e.id) === String(raza?.especieId ?? raw.especieId));
    return {
      id:          raw.id,
      name:        raw.nombre,
      species:     especie?.nombre ?? '—',
      breed:       raza?.nombre ?? '—',
      age:         calcAge(raw.fechaNacimiento),
      weight:      `${raw.peso} kg`,
      owner:       cliente?.nombre ?? '—',
      status:      raw.estado,
      avatarColor: COLORS[hash(raw.id) % COLORS.length],
      alergias:    raw.alergias ?? '',
    };
  }

  static toDomainList(mascotas: any[], clientes: any[], especies: any[], razas: any[]): Patient[] {
    return mascotas.map(m => this.toDomain(m, clientes, especies, razas));
  }
}
