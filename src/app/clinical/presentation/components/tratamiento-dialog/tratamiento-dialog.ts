import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClinicalService } from '../../../infrastructure/services/clinical.service';

@Component({
  selector: 'app-tratamiento-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './tratamiento-dialog.html',
})
export class TratamientoDialog {
  private fb    = inject(FormBuilder);
  private ref   = inject(MatDialogRef<TratamientoDialog>);
  private svc   = inject(ClinicalService);
  private snack = inject(MatSnackBar);
  readonly data = inject(MAT_DIALOG_DATA, { optional: true }) as { consultaId: string; tratamiento?: any } | null;

  isEdit       = !!this.data?.tratamiento;
  medicamentos = signal<any[]>([]);
  loading      = signal(true);

  form = this.fb.group({
    consultaId:    [this.data?.consultaId ?? '', Validators.required],
    medicamentoId: [this.data?.tratamiento?.medicamentoId ?? null],
    cantidad:      [this.data?.tratamiento?.cantidad ?? 1, [Validators.min(1)]],
    descripcion:   [this.data?.tratamiento?.descripcion ?? ''],
    dosis:         [this.data?.tratamiento?.dosis ?? ''],
    frecuencia:    [this.data?.tratamiento?.frecuencia ?? ''],
    duracion:      [this.data?.tratamiento?.duracion ?? ''],
  });

  constructor() {
    this.svc.getMedicamentos().subscribe({
      next: meds => { this.medicamentos.set(meds); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }

  submitting = false;

  submit() {
    if (this.form.invalid) return;
    this.submitting = true;
    const v = this.form.value;
    const body = {
      consultaId:    v.consultaId,
      medicamentoId: v.medicamentoId || null,
      cantidad:      v.medicamentoId ? (v.cantidad ?? 1) : null,
      descripcion:   v.descripcion,
      dosis:         v.dosis,
      frecuencia:    v.frecuencia,
      duracion:      v.duracion,
    };

    const op = this.isEdit
      ? this.svc.updateTratamiento(this.data!.tratamiento.id, body)
      : this.svc.createTratamiento(body);

    op.subscribe({
      next: () => {
        this.snack.open(this.isEdit ? 'Tratamiento actualizado' : 'Tratamiento registrado', 'OK', { duration: 3000 });
        this.ref.close(true);
      },
      error: () => { this.snack.open('Error al guardar', '', { duration: 3000 }); this.submitting = false; },
    });
  }
}
