import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ClinicalService } from '../../../../clinical/infrastructure/services/clinical.service';
import { AuthStore } from '../../../../iam/application/auth.store';

@Component({
  selector: 'app-profile',
  imports: [FormsModule, MatIconModule, MatButtonModule, MatSlideToggleModule, TranslatePipe],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  private svc       = inject(ClinicalService);
  private snack     = inject(MatSnackBar);
  private translate = inject(TranslateService);
  private auth      = inject(AuthStore);
  private router    = inject(Router);

  form = {
    nombre:       'Carlos',
    apellidos:    'Méndez Rodríguez',
    correo:       'carlos.mendez@vetalis.com',
    telefono:     '+51 987 654 321',
    especialidad: 'Medicina General Veterinaria',
    dni:          '12345678'
  };

  passwords = { current: '', nuevo: '', confirmar: '' };

  preferences = {
    emailNotifications:   true,
    smsNotifications:     false,
    appointmentReminders: true,
    systemAlerts:         true,
    weeklyReport:         false
  };

  activityStats = [
    { value: '247',   labelKey: 'profile.activity.consultations' },
    { value: '89',    labelKey: 'profile.activity.patients'      },
    { value: '4.9',   labelKey: 'profile.activity.rating'        },
    { value: '3 años', labelKey: 'profile.activity.time'         }
  ];

  quickActions: { icon: string; labelKey: string; color: string; bg: string; action?: () => void }[] = [
    { icon: 'download',     labelKey: 'profile.quickActions.exportData',   color: '#06B6D4', bg: '#E0F2FE' },
    { icon: 'history',      labelKey: 'profile.quickActions.viewActivity', color: '#8B5CF6', bg: '#EDE9FE' },
    { icon: 'help_outline', labelKey: 'profile.quickActions.helpCenter',   color: '#F59E0B', bg: '#FEF9C3' },
    { icon: 'logout',       labelKey: 'profile.quickActions.logout',       color: '#EF4444', bg: '#FEE2E2', action: () => this.logout() },
  ];

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  saveProfile() {
    const body = {
      nombre:       this.form.nombre,
      apellidos:    this.form.apellidos,
      correo:       this.form.correo,
      telefono:     this.form.telefono,
      especialidad: this.form.especialidad,
      dni:          this.form.dni,
    };
    this.svc.updateVeterinario(1, body).subscribe({
      next: () => this.snack.open(this.translate.instant('profile.messages.profileSaved'), 'OK', { duration: 3000 }),
      error: () => this.snack.open(this.translate.instant('profile.messages.profileError'), '', { duration: 3000 }),
    });
  }

  savePassword() {
    if (!this.passwords.nuevo || this.passwords.nuevo !== this.passwords.confirmar) {
      this.snack.open(this.translate.instant('profile.messages.passwordMismatch'), '', { duration: 3000 });
      return;
    }
    this.snack.open(this.translate.instant('profile.messages.passwordUpdated'), 'OK', { duration: 3000 });
    this.passwords = { current: '', nuevo: '', confirmar: '' };
  }
}