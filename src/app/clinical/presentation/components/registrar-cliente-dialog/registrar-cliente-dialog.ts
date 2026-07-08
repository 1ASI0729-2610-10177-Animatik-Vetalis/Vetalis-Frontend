import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClinicalService } from '../../../infrastructure/services/clinical.service';
import { ClinicalStore } from '../../../application/clinical.store';

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
  readonly store = inject(ClinicalStore);
  readonly data  = inject(MAT_DIALOG_DATA, { optional: true }) as { cliente?: any } | null;

  isEdit = !!this.data?.cliente;

  form = this.fb.group({
    nombre:    [this.data?.cliente?.nombre ?? '', Validators.required],
    telefono:  [this.data?.cliente?.telefono ?? '', Validators.required],
    correo:    [this.data?.cliente?.email ?? '', [Validators.email]],
    direccion: [this.data?.cliente?.direccion ?? ''],
    dni:       [this.data?.cliente?.dni ?? ''],
  });

  submitting = false;

  submit() {
    if (this.form.invalid) return;
    this.submitting = true;
    const v = this.form.value;
    const body = { nombre: v.nombre, telefono: v.telefono, email: v.correo, direccion: v.direccion, dni: v.dni };

    const op = this.isEdit
      ? this.svc.updateCliente(this.data!.cliente.id, body)
      : this.svc.createCliente(body);

    op.subscribe({
      next: () => {
        this.snack.open(this.isEdit ? 'Cliente actualizado' : 'Cliente registrado', 'OK', { duration: 3000 });
        this.ref.close(true);
      },
      error: () => { this.snack.open('Error al guardar', '', { duration: 3000 }); this.submitting = false; },
    });
  }
}
