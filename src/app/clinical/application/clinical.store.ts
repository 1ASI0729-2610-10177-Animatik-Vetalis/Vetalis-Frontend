import { Injectable, inject, signal, computed } from '@angular/core';
import { Patient } from '../domain/model/patient.model';
import { Consultation } from '../domain/model/consultation.model';
import { Vaccine } from '../domain/model/vaccine.model';
import { Hospitalization } from '../domain/model/hospitalization.model';
import { Appointment } from '../domain/model/appointment.model';
import { ClinicalService } from '../infrastructure/services/clinical.service';

@Injectable({ providedIn: 'root' })
export class ClinicalStore {
  private svc = inject(ClinicalService);

  // Domain signals
  patients          = signal<Patient[]>([]);
  consultations     = signal<Consultation[]>([]);
  vaccines          = signal<Vaccine[]>([]);
  hospitalizations  = signal<Hospitalization[]>([]);
  todayAppointments = signal<Appointment[]>([]);
  loading           = signal(true);

  // Reference data for dialogs
  rawEspecies     = signal<any[]>([]);
  rawRazas        = signal<any[]>([]);
  rawClientes     = signal<any[]>([]);
  rawTiposVacuna  = signal<any[]>([]);
  rawMascotas     = signal<any[]>([]);
  rawVeterinarios = signal<any[]>([]);

  // History / patient selection
  selectedPatientId = signal<string | null>(null);

  selectedPatient = computed(() => {
    const id = this.selectedPatientId();
    return id ? (this.patients().find(p => p.id === id) ?? null) : null;
  });

  constructor() { this.load(); }

  reload() { this.loading.set(true); this.load(); }
  selectPatient(id: string) { this.selectedPatientId.set(id); }

  private load() {
    this.svc.loadAll().subscribe({
      next: d => {
        this.patients.set(d.patients);
        this.consultations.set(d.consultations);
        this.vaccines.set(d.vaccines);
        this.hospitalizations.set(d.hospitalizations);
        this.todayAppointments.set(d.todayAppointments);
        this.rawEspecies.set(d.rawEspecies);
        this.rawRazas.set(d.rawRazas);
        this.rawClientes.set(d.rawClientes);
        this.rawTiposVacuna.set(d.rawTiposVacuna);
        this.rawMascotas.set(d.rawMascotas);
        this.rawVeterinarios.set(d.rawVeterinarios);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }
}
