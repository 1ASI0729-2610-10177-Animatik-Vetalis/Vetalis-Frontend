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
      medicamentos:  this.http.get<any[]>(`${this.base}/medicamentos`),
      pagos:         this.http.get<any[]>(`${this.base}/pagos`),
      mascotas:      this.http.get<any[]>(`${this.base}/mascotas`),
      clientes:      this.http.get<any[]>(`${this.base}/clientes`),
      consultas:     this.http.get<any[]>(`${this.base}/consultas`),
      veterinarios:  this.http.get<any[]>(`${this.base}/veterinarios`).pipe(catchError(() => of([]))),
    });
  }

  createMedicamento(body: any) { return this.http.post<any>(`${this.base}/medicamentos`, body); }

  createPago(body: any)       { return this.http.post<any>(`${this.base}/pagos`, body); }
  voidPago(id: any, body: any){ return this.http.put<any>(`${this.base}/pagos/${id}`, body); }
}
