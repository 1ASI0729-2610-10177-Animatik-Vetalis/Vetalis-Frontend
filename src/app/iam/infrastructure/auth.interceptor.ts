import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthStore } from '../application/auth.store';
import { tokenStorage, isJwtValid } from './token-storage';

/**
 * Adjunta `Authorization: Bearer <token>` a toda petición (salvo el propio
 * login/registro) y, ante un 401, cierra sesión y redirige a /login.
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const auth = inject(AuthStore);

  const token = tokenStorage.getToken();
  const isAuthCall = req.url.includes('/auth/sign-in') || req.url.includes('/auth/sign-up');

  const authReq = token && !isAuthCall
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(authReq).pipe(
    catchError((err: HttpErrorResponse) => {
      // Este backend devuelve 403 tanto para "token inválido/expirado" como para
      // rutas inexistentes/prohibidas con token válido. Solo cerramos sesión si el
      // token realmente ya no sirve (401, o 403 con un JWT expirado/no válido).
      const sessionDead = err.status === 401 || (err.status === 403 && !isJwtValid(token));
      if (sessionDead && token && !isAuthCall) {
        auth.logout();
        router.navigate(['/login']);
      }
      return throwError(() => err);
    })
  );
};
