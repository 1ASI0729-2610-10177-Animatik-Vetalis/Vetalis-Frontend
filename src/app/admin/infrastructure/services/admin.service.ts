import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private http = inject(HttpClient);
  private base = environment.apiUrl;

  loadAll() {
    return forkJoin({
      medicamentos: this.http.get<any[]>(`${this.base}/medicamentos`),
      inventario:   this.http.get<any[]>(`${this.base}/inventario`),
      pagos:        this.http.get<any[]>(`${this.base}/pagos`),
    });
  }

  createMedicamento(body: any) { return this.http.post<any>(`${this.base}/medicamentos`, body); }
  createInventario(body: any)  { return this.http.post<any>(`${this.base}/inventario`, body); }
}
