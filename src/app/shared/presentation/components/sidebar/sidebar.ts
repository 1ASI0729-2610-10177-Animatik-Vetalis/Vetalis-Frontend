import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, MatIconModule, MatRippleModule, TranslatePipe],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  private translate = inject(TranslateService);

  currentLang = signal<string>('es');

  navItems = [
    { path: '/dashboard',     icon: 'dashboard',       labelKey: 'sidebar.nav.dashboard'      },
    { path: '/clinical',      icon: 'medical_services', labelKey: 'sidebar.nav.clinical'       },
    { path: '/schedule',      icon: 'calendar_month',  labelKey: 'sidebar.nav.schedule'       },
    { path: '/communication', icon: 'forum',            labelKey: 'sidebar.nav.communication'  },
    { path: '/profile',       icon: 'account_circle',  labelKey: 'sidebar.nav.profile'        },
  ];

  switchLang(lang: string): void {
    this.currentLang.set(lang);
    this.translate.use(lang);
  }
}