import { Routes } from '@angular/router';
import { Layout } from './shared/presentation/layout/layout';
import { authGuard, guestGuard, roleGuard } from './iam/presentation/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    canActivate: [guestGuard],
    loadComponent: () => import('./iam/presentation/views/login/login').then(m => m.Login)
  },
  {
    path: '',
    component: Layout,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/presentation/views/dashboard/dashboard').then(m => m.Dashboard)
      },
      {
        path: 'clinical',
        loadComponent: () => import('./clinical/presentation/views/clinical-management/clinical-management').then(m => m.ClinicalManagement)
      },
      {
        path: 'schedule',
        loadComponent: () => import('./schedule/presentation/views/schedule/schedule').then(m => m.Schedule)
      },
      {
        path: 'communication',
        loadComponent: () => import('./communication/presentation/views/communication/communication').then(m => m.Communication)
      },
      {
        path: 'profile',
        loadComponent: () => import('./profile/presentation/views/profile/profile').then(m => m.Profile)
      },
      {
        path: 'admin',
        canActivate: [roleGuard],
        data: { roles: ['admin'] },
        loadComponent: () => import('./admin/presentation/views/admin-dashboard/admin-dashboard').then(m => m.AdminDashboard)
      },
      {
        path: 'iot',
        loadComponent: () => import('./iot/presentation/views/iot-dashboard/iot-dashboard').then(m => m.IotDashboard)
      }
    ]
  },
  { path: '**', redirectTo: '' }
];
