import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private http = inject(HttpClient);
  private base = environment.apiUrl;

  getSummary() {
    return this.http.get<any>(`${this.base}/dashboard/summary`).pipe(
      catchError(() => of(null))
    );
  }
}
