import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClinicalStore } from '../../../application/clinical.store';
import { ClinicalService } from '../../../infrastructure/services/clinical.service';

@Component({
  selector: 'app-registrar-vacuna-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './registrar-vacuna-dialog.html',
})
export class RegistrarVacunaDialog {
  private fb    = inject(FormBuilder);
  private ref   = inject(MatDialogRef<RegistrarVacunaDialog>);
  private svc   = inject(ClinicalService);
  private snack = inject(MatSnackBar);
  readonly store = inject(ClinicalStore);
  readonly data  = inject(MAT_DIALOG_DATA, { optional: true }) as { patientId?: string } | null;

  today = new Date().toISOString().split('T')[0];

  form = this.fb.group({
    mascotaId:       [this.data?.patientId ?? '', Validators.required],
    tipoVacunaId:    ['', Validators.required],
    fechaAplicacion: [this.today, Validators.required],
    proximaDosis:    ['', Validators.required],
    lote:            [''],
    observaciones:   [''],
  });

  submitting = false;

  submit() {
    if (this.form.invalid) return;
    this.submitting = true;
    const v = this.form.value;
    const existingIds = this.store.vaccines().map(v => parseInt(v.id?.replace('V-', '') ?? '0', 10)).filter(n => !isNaN(n));
    const nextNum = (existingIds.length ? Math.max(...existingIds) : 0) + 1;
    const id = `V-${String(nextNum).padStart(3, '0')}`;
    const body = {
      id, mascotaId: v.mascotaId, tipoVacunaId: v.tipoVacunaId,
      fechaAplicacion: v.fechaAplicacion, proximaDosis: v.proximaDosis,
      lote: v.lote, observaciones: v.observaciones, veterinarioId: 1,
    };
    this.svc.createVacuna(body).subscribe({
      next: () => { this.snack.open('Vacuna registrada', 'OK', { duration: 3000 }); this.ref.close(true); },
      error: () => { this.snack.open('Error al guardar', '', { duration: 3000 }); this.submitting = false; },
    });
  }
}
