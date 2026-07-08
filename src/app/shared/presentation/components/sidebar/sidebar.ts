import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AuthStore } from '../../../../iam/application/auth.store';

interface NavItem {
  path: string;
  icon: string;
  labelKey: string;
  roles?: string[];
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, MatIconModule, MatRippleModule, TranslatePipe],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  private translate = inject(TranslateService);
  private auth      = inject(AuthStore);
  private router    = inject(Router);

  currentLang = signal<string>('es');

  user     = this.auth.user;
  fullName = this.auth.fullName;

  private allNavItems: NavItem[] = [
    { path: '/dashboard',     icon: 'dashboard',            labelKey: 'sidebar.nav.dashboard'     },
    { path: '/clinical',      icon: 'medical_services',     labelKey: 'sidebar.nav.clinical'      },
    { path: '/schedule',      icon: 'calendar_month',       labelKey: 'sidebar.nav.schedule'      },
    { path: '/communication', icon: 'forum',                labelKey: 'sidebar.nav.communication' },
    { path: '/profile',       icon: 'account_circle',       labelKey: 'sidebar.nav.profile'       },
    { path: '/admin',         icon: 'admin_panel_settings', labelKey: 'sidebar.nav.admin', roles: ['admin'] },
  ];

  navItems = computed(() =>
    this.allNavItems.filter(item => !item.roles || item.roles.some(r => this.auth.hasRole(r)))
  );

  initials = computed(() => {
    const u = this.user();
    if (!u) return '';
    return `${u.nombre?.[0] ?? ''}${u.apellidos?.[0] ?? ''}`.toUpperCase();
  });

  roleLabel = computed(() => {
    if (this.auth.hasRole('admin')) return 'Administrador';
    return this.user()?.especialidad || this.translate.instant('sidebar.user.role');
  });

  switchLang(lang: string): void {
    this.currentLang.set(lang);
    this.translate.use(lang);
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
