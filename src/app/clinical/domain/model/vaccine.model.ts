export interface Vaccine {
  id: string;
  mascotaId: string;
  patientName: string;
  patientBreed: string;
  patientAvatarColor: string;
  vaccineName: string;
  vaccineDesc: string;
  lastApplied: string;
  nextDose: string;
  nextDoseHighlight: boolean;
  status: 'Al Día' | 'Próxima' | 'Vencida';
}
