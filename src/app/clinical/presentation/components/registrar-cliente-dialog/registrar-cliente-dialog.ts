import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClinicalService } from '../../../infrastructure/services/clinical.service';

@Component({
  selector: 'app-registrar-cliente-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './registrar-cliente-dialog.html',
})
export class RegistrarClienteDialog {
  private fb    = inject(FormBuilder);
  private ref   = inject(MatDialogRef<RegistrarClienteDialog>);
  private svc   = inject(ClinicalService);
  private snack = inject(MatSnackBar);

  form = this.fb.group({
    nombre:    ['', Validators.required],
    telefono:  ['', Validators.required],
    correo:    ['', [Validators.email]],
    direccion: [''],
    dni:       [''],
  });

  submitting = false;

  submit() {
    if (this.form.invalid) return;
    this.submitting = true;
    const v = this.form.value;
    const body = { nombre: v.nombre, telefono: v.telefono, correo: v.correo, direccion: v.direccion, dni: v.dni };
    this.svc.createCliente(body).subscribe({
      next: () => { this.snack.open('Cliente registrado', 'OK', { duration: 3000 }); this.ref.close(true); },
      error: () => { this.snack.open('Error al guardar', '', { duration: 3000 }); this.submitting = false; },
    });
  }
}
