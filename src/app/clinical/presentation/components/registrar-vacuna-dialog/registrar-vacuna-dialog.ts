import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClinicalStore } from '../../../application/clinical.store';
import { ClinicalService } from '../../../infrastructure/services/clinical.service';
import { AuthStore } from '../../../../iam/application/auth.store';

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
  private auth  = inject(AuthStore);
  readonly store = inject(ClinicalStore);
  readonly data  = inject(MAT_DIALOG_DATA, { optional: true }) as { patientId?: string } | null;

  today = new Date().toISOString().split('T')[0];

  medicamentos = signal<any[]>([]);
  loadingMeds  = signal(true);

  form = this.fb.group({
    mascotaId:       [this.data?.patientId ?? '', Validators.required],
    medicamentoId:   ['', Validators.required],
    fechaAplicacion: [this.today, Validators.required],
    proximaDosis:    [''],
    lote:            [''],
    observaciones:   [''],
  });

  submitting = false;

  constructor() {
    this.svc.getMedicamentos().subscribe({
      next: meds => {
        this.medicamentos.set(meds.filter((m: any) => m.stockActual > 0));
        this.loadingMeds.set(false);
      },
      error: () => this.loadingMeds.set(false),
    });
  }

  get selectedMed(): any {
    const id = this.form.value.medicamentoId;
    return this.medicamentos().find(m => String(m.id) === String(id)) ?? null;
  }

  submit() {
    if (this.form.invalid) return;
    this.submitting = true;
    const v   = this.form.value;
    const med = this.selectedMed;
    const body = {
      mascotaId:       Number(v.mascotaId),
      tipoVacunaId:    Number(v.medicamentoId),
      nombreVacuna:    med?.nombre ?? 'Vacuna',
      lote:            v.lote || null,
      fechaAplicacion: v.fechaAplicacion,
      proximaDosis:    v.proximaDosis || null,
      estado:          'Aplicada',
      veterinarioId:   Number(this.auth.user()?.id ?? 0),
    };
    this.svc.createVacuna(body).subscribe({
      next: () => {
        this.snack.open('Vacuna registrada y stock actualizado', 'OK', { duration: 3000 });
        this.ref.close(true);
      },
      error: () => { this.snack.open('Error al guardar', '', { duration: 3000 }); this.submitting = false; },
    });
  }
}
