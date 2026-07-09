import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../../infrastructure/services/admin.service';

@Component({
  selector: 'app-crear-veterinario-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './crear-veterinario-dialog.html',
})
export class CrearVeterinarioDialog {
  private fb    = inject(FormBuilder);
  private ref   = inject(MatDialogRef<CrearVeterinarioDialog>);
  private svc   = inject(AdminService);
  private snack = inject(MatSnackBar);

  especialidades = ['Medicina General','Cirugía','Dermatología','Cardiología','Oncología','Nutrición','Emergencias'];

  showPassword = false;

  form = this.fb.group({
    firstName:    ['', [Validators.required, Validators.maxLength(50)]],
    lastName:     ['', [Validators.required, Validators.maxLength(50)]],
    email:        ['', [Validators.required, Validators.email, Validators.maxLength(150)]],
    password:     ['', [Validators.required, Validators.minLength(8), Validators.maxLength(72)]],
    dni:          ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern('^[0-9]{8}$')]],
    telefono:     ['', [Validators.maxLength(15)]],
    especialidad: ['Medicina General'],
  });

  submitting = false;

  submit() {
    if (this.form.invalid) return;
    this.submitting = true;
    const v = this.form.value;
    const body = { ...v, role: 'VETERINARIAN' };
    this.svc.createVeterinario(body).subscribe({
      next: () => {
        this.snack.open(`Veterinario ${v.firstName} ${v.lastName} creado correctamente`, 'OK', { duration: 4000 });
        this.ref.close(true);
      },
      error: (err) => {
        const msg = err?.error?.message ?? err?.error ?? `Error ${err?.status}`;
        this.snack.open(`Error: ${msg}`, '', { duration: 6000 });
        this.submitting = false;
      },
    });
  }
}
