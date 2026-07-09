import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private http = inject(HttpClient);
  private base = environment.apiUrl;

  loadAll() {
    return forkJoin({
      medicamentos:   this.http.get<any[]>(`${this.base}/medicamentos`).pipe(catchError(() => of([]))),
      pagos:          this.http.get<any[]>(`${this.base}/pagos`).pipe(catchError(() => of([]))),
      mascotas:       this.http.get<any[]>(`${this.base}/mascotas`).pipe(catchError(() => of([]))),
      clientes:       this.http.get<any[]>(`${this.base}/clientes`).pipe(catchError(() => of([]))),
      consultas:      this.http.get<any[]>(`${this.base}/consultas`).pipe(catchError(() => of([]))),
      veterinarios:   this.http.get<any[]>(`${this.base}/veterinarios`).pipe(catchError(() => of([]))),
    });
  }

  // ── Medicamentos ──────────────────────────────────────────────
  createMedicamento(body: any)          { return this.http.post<any>(`${this.base}/medicamentos`, body); }
  updateMedicamento(id: any, b: any)    { return this.http.put<any>(`${this.base}/medicamentos/${id}`, b); }
  deleteMedicamento(id: any)            { return this.http.delete(`${this.base}/medicamentos/${id}`); }
  getMedicamentoAlerts()                { return this.http.get<any[]>(`${this.base}/medicamentos/alerts`); }

  // ── Veterinarios ─────────────────────────────────────────────
  createVeterinario(body: any) { return this.http.post<any>(`${this.base}/auth/signup`, body); }
  deleteVeterinario(id: any)   { return this.http.delete(`${this.base}/veterinarios/${id}`); }

  // ── Pagos ─────────────────────────────────────────────────────
  createPago(body: any)                 { return this.http.post<any>(`${this.base}/pagos`, body); }
  anularPago(id: any, motivo = '')      { return this.http.delete<void>(`${this.base}/pagos/${id}?motivo=${encodeURIComponent(motivo)}`); }

  // US021: Cierre de caja — usa el endpoint dedicado del backend
  cierreCaja(fecha: string)             { return this.http.post<any>(`${this.base}/pagos/cierre-caja?fecha=${fecha}`, {}); }

  // US029: Reporte de ventas por rango de fechas
  getReporte(desde: string, hasta: string) {
    return this.http.get<any>(`${this.base}/pagos/reporte?desde=${desde}&hasta=${hasta}`);
  }
}
