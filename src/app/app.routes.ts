import { Routes } from '@angular/router';
import { Layout } from './shared/presentation/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
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
        loadComponent: () => import('./admin/presentation/views/admin-dashboard/admin-dashboard').then(m => m.AdminDashboard)
      }
    ]
  },
  { path: '**', redirectTo: '' }
];
