import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Credentials, User } from '../domain/model/user.model';

/** Normaliza el rol del backend ("ROLE_ADMIN", "VETERINARIAN") a algo comparable ("admin", "veterinarian"). */
function normalizeRoles(role: string | string[] | null | undefined): string[] {
  const list = Array.isArray(role) ? role : role ? [role] : [];
  return list.map(r => String(r).replace(/^ROLE_/i, '').toLowerCase());
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private base = environment.apiUrl;

  /**
   * Backend (Spring Boot): POST /auth/sign-in con { username, password }.
   * Respuesta: { id, username, token, role }. El username es el email.
   */
  login(credentials: Credentials) {
    const body = { username: credentials.email.trim(), password: credentials.password };
    return this.http.post<any>(`${this.base}/auth/sign-in`, body).pipe(
      map(res => {
        if (!res?.token) throw new Error('INVALID_CREDENTIALS');
        const user: User = {
          id:          String(res.id),
          nombre:      res.username,
          apellidos:   '',
          email:       res.username,
          roles:       normalizeRoles(res.role),
          avatarColor: '#06B6D4',
        };
        return { token: res.token as string, user };
      })
    );
  }
}
