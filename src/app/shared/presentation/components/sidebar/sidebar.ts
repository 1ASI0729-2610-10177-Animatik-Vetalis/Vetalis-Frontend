import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, MatIconModule, MatRippleModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  navItems = [
    { path: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { path: '/clinical', icon: 'medical_services', label: 'Gestión Clínica' },
    { path: '/schedule', icon: 'calendar_month', label: 'Agenda' },
    { path: '/communication', icon: 'forum', label: 'Comunicación' },
    { path: '/profile', icon: 'account_circle', label: 'Perfil' },
  ];
}
