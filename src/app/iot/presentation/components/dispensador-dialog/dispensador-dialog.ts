import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IotService } from '../../../infrastructure/services/iot.service';
import { ClinicalStore } from '../../../../clinical/application/clinical.store';

@Component({
  selector: 'app-dispensador-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './dispensador-dialog.html',
})
export class DispensadorDialog {
  private fb    = inject(FormBuilder);
  private ref   = inject(MatDialogRef<DispensadorDialog>);
  private svc   = inject(IotService);
  private snack = inject(MatSnackBar);
  readonly store = inject(ClinicalStore);
  readonly data  = inject(MAT_DIALOG_DATA, { optional: true }) as { dispensador?: any } | null;

  isEdit = !!this.data?.dispensador;

  estados  = ['ACTIVO', 'INACTIVO', 'MANTENIMIENTO'];
  modelos  = ['VetFeeder Pro', 'VetFeeder Lite', 'SmartDish V2', 'AutoPet 3000', 'FeedMatic X'];

  form = this.fb.group({
    numeroSerie:   [this.data?.dispensador?.numeroSerie ?? '', Validators.required],
    modelo:        [this.data?.dispensador?.modelo ?? ''],
    estado:        [this.data?.dispensador?.estado ?? 'INACTIVO'],
    nivelAlimento: [this.data?.dispensador?.nivelAlimento ?? 100, [Validators.min(0), Validators.max(100)]],
    mascotaId:     [this.data?.dispensador?.mascotaId ?? null],
  });

  submitting = false;

  submit() {
    if (this.form.invalid) return;
    this.submitting = true;
    const v = this.form.value;
    const body = {
      numeroSerie:    v.numeroSerie,
      modelo:         v.modelo || 'VetFeeder Pro',
      estado:         v.estado,
      nivelAlimento:  v.nivelAlimento,
      ultimaConexion: new Date().toISOString(),
      mascotaId:      v.mascotaId ? Number(v.mascotaId) : null,
    };

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
