import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { PatientAssembler } from '../assembler/patient.assembler';
import { ConsultationAssembler } from '../assembler/consultation.assembler';
import { VaccineAssembler } from '../assembler/vaccine.assembler';
import { HospitalizationAssembler } from '../assembler/hospitalization.assembler';
import { AppointmentAssembler } from '../assembler/appointment.assembler';

@Injectable({ providedIn: 'root' })
export class ClinicalService {
  private http = inject(HttpClient);
  private base = environment.apiUrl;

  loadAll() {
    // El backend NO tiene /tiposVacuna ni /veterinarios (y usa /hospitalizacion en singular).
    return forkJoin({
      mascotas:        this.http.get<any[]>(`${this.base}/mascotas`),
      clientes:        this.http.get<any[]>(`${this.base}/clientes`),
      especies:        this.http.get<any[]>(`${this.base}/especies`),
      razas:           this.http.get<any[]>(`${this.base}/razas`),
      consultas:       this.http.get<any[]>(`${this.base}/consultas`),
      vacunas:         this.http.get<any[]>(`${this.base}/vacunas`),
      hospitalizacion: this.http.get<any[]>(`${this.base}/hospitalizacion`),
      citas:           this.http.get<any[]>(`${this.base}/citas`),
    }).pipe(
      map(d => {
        const today = new Date().toISOString().split('T')[0];
        const allApts = AppointmentAssembler.toDomainList(d.citas, d.mascotas, d.clientes);
        return {
          patients:          PatientAssembler.toDomainList(d.mascotas, d.clientes, d.especies, d.razas),
          consultations:     ConsultationAssembler.toDomainList(d.consultas, d.mascotas, d.clientes, d.razas, []),
          vaccines:          VaccineAssembler.toDomainList(d.vacunas, d.mascotas, d.razas),
          hospitalizations:  HospitalizationAssembler.toDomainList(d.hospitalizacion, d.mascotas, d.clientes, d.razas),
          todayAppointments: allApts.filter(a => a.date === today && (a.status === 'Pendiente' || a.status === 'Confirmada')),
          // raw reference data for dialogs
          rawEspecies:     d.especies,
          rawRazas:        d.razas,
          rawClientes:     d.clientes,
          rawTiposVacuna:  [] as any[],
          rawMascotas:     d.mascotas,
          rawVeterinarios: [] as any[],
          rawCitas:        d.citas,
        };
      })
    );
  }

  // ── CRUD ──────────────────────────────────────────────────
  createCita(body: any)             { return this.http.post(`${this.base}/citas`, body); }
  createMascota(body: any)          { return this.http.post(`${this.base}/mascotas`, body); }
  updateMascota(id: string, b: any) { return this.http.put(`${this.base}/mascotas/${id}`, b); }
  deleteMascota(id: string)         { return this.http.delete(`${this.base}/mascotas/${id}`); }
  createConsulta(body: any)         { return this.http.post(`${this.base}/consultas`, body); }
  closeConsulta(id: string)         { return this.http.put(`${this.base}/consultas/${id}/close`, {}); }
  createVacuna(body: any)           { return this.http.post(`${this.base}/vacunas`, body); }
  createHospitalizacion(body: any)  { return this.http.post(`${this.base}/hospitalizacion`, body); }
  createCliente(body: any)              { return this.http.post(`${this.base}/clientes`, body); }
  updateCliente(id: number, body: any)  { return this.http.put(`${this.base}/clientes/${id}`, body); }
  deleteCliente(id: number)             { return this.http.delete(`${this.base}/clientes/${id}`); }

  getTratamientos(consultaId: string)   { return this.http.get<any[]>(`${this.base}/tratamientos?consultaId=${consultaId}`); }
  createTratamiento(body: any)          { return this.http.post<any>(`${this.base}/tratamientos`, body); }
  updateTratamiento(id: number, b: any) { return this.http.put<any>(`${this.base}/tratamientos/${id}`, b); }
  deleteTratamiento(id: number)         { return this.http.delete(`${this.base}/tratamientos/${id}`); }

  updateVeterinario(id: number, b: any) { return this.http.put(`${this.base}/veterinarios/${id}`, b); }
  getVeterinarios()                     { return this.http.get<any[]>(`${this.base}/veterinarios`); }
}
