import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslatePipe } from '@ngx-translate/core';
import { IotService } from '../../../infrastructure/services/iot.service';

@Component({
  selector: 'app-dispensador-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, MatDialogModule, MatButtonModule, MatIconModule, TranslatePipe],
  templateUrl: './dispensador-dialog.html',
})
export class DispensadorDialog {
  private fb    = inject(FormBuilder);
  private ref   = inject(MatDialogRef<DispensadorDialog>);
  private svc   = inject(IotService);
  private snack = inject(MatSnackBar);
  readonly data = inject(MAT_DIALOG_DATA, { optional: true }) as { dispensador?: any } | null;

  isEdit = !!this.data?.dispensador;

  estados = ['ACTIVO', 'INACTIVO', 'MANTENIMIENTO'];

  form = this.fb.group({
    numeroSerie:    [this.data?.dispensador?.numeroSerie ?? '', Validators.required],
    modelo:         [this.data?.dispensador?.modelo ?? '', Validators.required],
    estado:         [this.data?.dispensador?.estado ?? 'INACTIVO'],
    nivelAlimento:  [this.data?.dispensador?.nivelAlimento ?? 100, [Validators.required, Validators.min(0)]],
  });

  submitting = false;

  submit() {
    if (this.form.invalid) return;
    this.submitting = true;
    const v = this.form.value;
    const body = { ...v, ultimaConexion: new Date().toISOString() };

    const op = this.isEdit
      ? this.svc.update(this.data!.dispensador.id, body)
      : this.svc.create(body);

    op.subscribe({
      next: () => {
        this.snack.open(this.isEdit ? 'Dispensador actualizado' : 'Dispensador registrado', 'OK', { duration: 3000 });
        this.ref.close(true);
      },
      error: () => { this.snack.open('Error al guardar', '', { duration: 3000 }); this.submitting = false; },
    });
  }
}
