import { Hospitalization } from '../../domain/model/hospitalization.model';

const COLORS = ['#F97316','#7C3AED','#06B6D4','#16A34A','#EF4444','#8B5CF6','#F59E0B','#EC4899'];
const MN = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];

function hash(id: string): number {
  let h = 0;
  for (const c of String(id)) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h;
}

function fmt(fecha: string): string {
  const [y, m, d] = fecha.split('-');
  return `${parseInt(d)} ${MN[parseInt(m) - 1]} ${y}`;
}

function calcAge(dob: string): string {
  const months = Math.floor((Date.now() - new Date(dob).getTime()) / (1000 * 60 * 60 * 24 * 30.44));
  if (months < 12) return `${months} ${months === 1 ? 'mes' : 'meses'}`;
  const yrs = Math.floor(months / 12);
  return `${yrs} ${yrs === 1 ? 'año' : 'años'}`;
}

function daysAgo(fecha: string): string {
  const diff = Math.floor((Date.now() - new Date(fecha).getTime()) / 86400000);
  if (diff === 0) return 'Hoy';
  if (diff === 1) return 'Hace 1 día';
  return `Hace ${diff} días`;
}

export class HospitalizationAssembler {
  static toDomain(raw: any, mascotas: any[], clientes: any[], razas: any[]): Hospitalization {
    const m = mascotas.find(x => String(x.id) === String(raw.mascotaId));
    const c = clientes.find(x => String(x.id) === String(m?.clienteId));
    const r = razas.find(x => String(x.id) === String(m?.razaId));
    const ingreso = (raw.fechaIngreso ?? '').split('T')[0];
    return {
      id:                 raw.id,
      mascotaId:          raw.mascotaId,
      patientName:        m?.nombre ?? '—',
      patientBreed:       r?.nombre ?? '—',
      patientAge:         m ? calcAge(m.fechaNacimiento) : '—',
      patientAvatarColor: COLORS[hash(String(raw.mascotaId)) % COLORS.length],
      ownerName:          c?.nombre ?? '—',
      ownerPhone:         c?.telefono ?? '—',
      status:             raw.estado,
      admissionDate:      fmt(ingreso),
      daysAgo:            daysAgo(ingreso),
      diagnosis:          raw.diagnostico,
      // Backend: tratamiento (string separado por comas). json-server: tratamientos (array).
      treatments:         Array.isArray(raw.tratamientos)
                            ? raw.tratamientos
                            : (raw.tratamiento ? String(raw.tratamiento).split(',').map((s: string) => s.trim()).filter(Boolean) : []),
    };
  }

  static toDomainList(hosps: any[], mascotas: any[], clientes: any[], razas: any[]): Hospitalization[] {
    return hosps.map(h => this.toDomain(h, mascotas, clientes, razas));
  }
}
