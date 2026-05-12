export interface Consultation {
  id: string;
  mascotaId: string;
  rawDate: string;
  patientName: string;
  patientBreed: string;
  patientAvatarColor: string;
  clientName: string;
  clientPhone: string;
  type: string;
  diagnosis: string;
  date: string;
  time: string;
  status: string;
  subjetivo?: string;
  objetivo?: string;
  plan?: string;
  veterinario?: string;
}
