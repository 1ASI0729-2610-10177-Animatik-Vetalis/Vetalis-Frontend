import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClinicalStore } from '../../../application/clinical.store';
import { ClinicalService } from '../../../infrastructure/services/clinical.service';

@Component({
  selector: 'app-nueva-cita-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './nueva-cita-dialog.html',
})
export class NuevaCitaDialog {
  private fb       = inject(FormBuilder);
  private ref      = inject(MatDialogRef<NuevaCitaDialog>);
  private svc      = inject(ClinicalService);
  private snack    = inject(MatSnackBar);
  readonly store   = inject(ClinicalStore);
  readonly data    = inject(MAT_DIALOG_DATA, { optional: true }) as { patientId?: string } | null;

  form = this.fb.group({
    mascotaId: [this.data?.patientId ?? '', Validators.required],
    fecha:     [new Date().toISOString().split('T')[0], Validators.required],
    hora:      ['09:00', Validators.required],
    motivo:    ['', Validators.required],
  });

  submitting = false;

  submit() {
    if (this.form.invalid) return;
    this.submitting = true;
    const v = this.form.value;
    const body = { fecha: `${v.fecha}T${v.hora}:00`, motivo: v.motivo, estado: 'PENDIENTE', mascotaId: v.mascotaId, veterinarioId: 1 };
    this.svc.createCita(body).subscribe({
      next: () => { this.snack.open('Cita creada correctamente', 'OK', { duration: 3000 }); this.ref.close(true); },
      error: () => { this.snack.open('Error al crear la cita', '', { duration: 3000 }); this.submitting = false; },
    });
  }
}
