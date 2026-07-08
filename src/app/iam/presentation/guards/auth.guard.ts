import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStore } from '../../application/auth.store';

/** Bloquea rutas si no hay sesión y redirige a /login. */
export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthStore);
  const router = inject(Router);
  if (auth.isAuthenticated()) return true;
  return router.createUrlTree(['/login']);
};

/** Impide volver a /login si ya hay sesión activa. */
export const guestGuard: CanActivateFn = () => {
  const auth = inject(AuthStore);
  const router = inject(Router);
  if (!auth.isAuthenticated()) return true;
  return router.createUrlTree(['/dashboard']);
};

/**
 * Restringe una ruta a roles concretos (data.roles).
 * Réplica del hasRequiredRole de VetCare.
 */
export const roleGuard: CanActivateFn = (route) => {
  const auth = inject(AuthStore);
  const router = inject(Router);
  const required = (route.data?.['roles'] as string[] | undefined) ?? [];
  if (required.length === 0) return true;
  if (required.some(r => auth.hasRole(r))) return true;
  return router.createUrlTree(['/dashboard']);
};
