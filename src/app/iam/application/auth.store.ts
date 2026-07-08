import { Injectable, inject, signal, computed } from '@angular/core';
import { Observable } from 'rxjs';
import { User, Credentials } from '../domain/model/user.model';
import { AuthService } from '../infrastructure/auth.service';
import { tokenStorage, isJwtValid } from '../infrastructure/token-storage';

/**
 * Store de sesión con Signals (equivalente al iam.store de VetCare en Pinia).
 * Mantiene el usuario y token en memoria y los persiste vía tokenStorage.
 */
@Injectable({ providedIn: 'root' })
export class AuthStore {
  private svc = inject(AuthService);

  private _token = signal<string | null>(null);
  private _user  = signal<User | null>(null);

  loading = signal(false);
  error   = signal<string | null>(null);

  user            = computed(() => this._user());
  roles           = computed(() => this._user()?.roles ?? []);
  isAuthenticated = computed(() => !!this._token());
  fullName        = computed(() => {
    const u = this._user();
    return u ? `${u.nombre} ${u.apellidos}`.trim() : '';
  });

  constructor() { this.restoreSession(); }

  login(credentials: Credentials): Observable<boolean> {
    this.loading.set(true);
    this.error.set(null);
    return new Observable<boolean>(observer => {
      this.svc.login(credentials).subscribe({
        next: ({ token, user }) => {
          this._token.set(token);
          this._user.set(user);
          tokenStorage.saveSession(token, user);
          this.loading.set(false);
          observer.next(true);
          observer.complete();
        },
        error: () => {
          this.error.set('INVALID_CREDENTIALS');
          this.loading.set(false);
          observer.next(false);
          observer.complete();
        },
      });
    });
  }

  logout(): void {
    this._token.set(null);
    this._user.set(null);
    tokenStorage.clearSession();
  }

  restoreSession(): void {
    const { token, user } = tokenStorage.getSession();
    if (token && user && isJwtValid(token)) {
      this._token.set(token);
      this._user.set(user);
    } else if (token) {
      // Token viejo/expirado (o pseudo-token json-server) → se descarta.
      tokenStorage.clearSession();
    }
  }

  hasRole(role: string): boolean {
    return this.roles().includes(role);
  }
}
