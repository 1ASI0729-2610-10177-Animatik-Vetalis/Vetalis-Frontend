export interface Hospitalization {
  id: string;
  mascotaId: string;
  patientName: string;
  patientBreed: string;
  patientAge: string;
  patientAvatarColor: string;
  ownerName: string;
  ownerPhone: string;
  status: 'Crítico' | 'Estable' | 'Recuperación';
  admissionDate: string;
  daysAgo: string;
  diagnosis: string;
  treatments: string[];
}
