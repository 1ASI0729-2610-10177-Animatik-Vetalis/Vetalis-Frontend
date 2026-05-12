import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CitaAssembler } from '../assembler/cita.assembler';

@Injectable({ providedIn: 'root' })
export class ScheduleService {
  private http = inject(HttpClient);
  private base = environment.apiUrl;

  loadAppointments() {
    return forkJoin({
      citas:    this.http.get<any[]>(`${this.base}/citas`),
      mascotas: this.http.get<any[]>(`${this.base}/mascotas`),
      clientes: this.http.get<any[]>(`${this.base}/clientes`),
    }).pipe(
      map(d => CitaAssembler.toDomainList(d.citas, d.mascotas, d.clientes))
    );
  }
}
