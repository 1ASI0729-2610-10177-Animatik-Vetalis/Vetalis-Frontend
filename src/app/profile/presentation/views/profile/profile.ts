import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClinicalService } from '../../../../clinical/infrastructure/services/clinical.service';

@Component({
  selector: 'app-profile',
  imports: [FormsModule, MatIconModule, MatButtonModule, MatSlideToggleModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  private svc   = inject(ClinicalService);
  private snack = inject(MatSnackBar);

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
    { value: '247', label: 'Consultas realizadas' },
    { value: '89',  label: 'Pacientes atendidos' },
    { value: '4.9', label: 'Calificación promedio' },
    { value: '3 años', label: 'Tiempo en el sistema' }
  ];

  quickActions = [
    { icon: 'download',     label: 'Exportar Datos',   color: '#06B6D4', bg: '#E0F2FE' },
    { icon: 'history',      label: 'Ver Actividad',    color: '#8B5CF6', bg: '#EDE9FE' },
    { icon: 'help_outline', label: 'Centro de Ayuda',  color: '#F59E0B', bg: '#FEF9C3' },
    { icon: 'logout',       label: 'Cerrar Sesión',    color: '#EF4444', bg: '#FEE2E2' },
  ];

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
      next: () => this.snack.open('Perfil actualizado correctamente', 'OK', { duration: 3000 }),
      error: () => this.snack.open('Error al guardar el perfil', '', { duration: 3000 }),
    });
  }

  savePassword() {
    if (!this.passwords.nuevo || this.passwords.nuevo !== this.passwords.confirmar) {
      this.snack.open('Las contraseñas no coinciden', '', { duration: 3000 });
      return;
    }
    this.snack.open('Contraseña actualizada', 'OK', { duration: 3000 });
    this.passwords = { current: '', nuevo: '', confirmar: '' };
  }
}
