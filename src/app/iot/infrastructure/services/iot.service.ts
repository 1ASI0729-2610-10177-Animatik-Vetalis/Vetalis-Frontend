import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class IotService {
  private http = inject(HttpClient);
  private base = environment.apiUrl;

  getAll()                                  { return this.http.get<any[]>(`${this.base}/dispensadores`); }
  getById(id: number)                       { return this.http.get<any>(`${this.base}/dispensadores/${id}`); }
  create(body: any)                         { return this.http.post<any>(`${this.base}/dispensadores`, body); }
  update(id: number, body: any)             { return this.http.put<any>(`${this.base}/dispensadores/${id}`, body); }
  dispensar(id: number, cantidad: number)   { return this.http.post<any>(`${this.base}/dispensadores/${id}/dispensar`, { cantidad }); }
  delete(id: number)                        { return this.http.delete(`${this.base}/dispensadores/${id}`); }
}
