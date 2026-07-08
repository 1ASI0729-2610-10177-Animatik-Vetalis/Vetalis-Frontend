import { User } from '../domain/model/user.model';

const TOKEN_KEY = 'vetalis_access_token';
const USER_KEY  = 'vetalis_user';

/**
 * Persiste la sesión en localStorage para sobrevivir recargas.
 * Réplica del token-storage de VetCare, adaptado a Vetalis.
 */
export const tokenStorage = {
  saveSession(token: string, user: User): void {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  getSession(): { token: string | null; user: User | null } {
    const token = localStorage.getItem(TOKEN_KEY);
    const userStr = localStorage.getItem(USER_KEY);
    let user: User | null = null;
    if (userStr) {
      try { user = JSON.parse(userStr) as User; }
      catch { user = null; }
    }
    return { token, user };
  },

  clearSession(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  },
};

/**
 * Valida que el token sea un JWT real y no esté expirado.
 * Descarta tokens viejos no-JWT (p. ej. pseudo-tokens de la etapa json-server)
 * y JWT con `exp` en el pasado.
 */
export function isJwtValid(token: string | null | undefined): boolean {
  if (!token) return false;
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  try {
    const payload = JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')));
    if (!payload.exp) return true;
    return payload.exp * 1000 > Date.now();
  } catch {
    return false;
  }
}
