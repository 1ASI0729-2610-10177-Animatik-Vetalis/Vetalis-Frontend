import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClinicalStore } from '../../../application/clinical.store';
import { ClinicalService } from '../../../infrastructure/services/clinical.service';

@Component({
  selector: 'app-nueva-consulta-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './nueva-consulta-dialog.html',
})
export class NuevaConsultaDialog {
  private fb     = inject(FormBuilder);
  private ref    = inject(MatDialogRef<NuevaConsultaDialog>);
  private svc    = inject(ClinicalService);
  private snack  = inject(MatSnackBar);
  readonly store = inject(ClinicalStore);
  readonly data  = inject(MAT_DIALOG_DATA, { optional: true }) as { patientId?: string } | null;

  tipos = ['Consulta General','Vacunación','Emergencia','Cirugía','Control','Dermatología','Post-Operatorio'];

  form = this.fb.group({
    mascotaId:   [this.data?.patientId ?? '', Validators.required],
    tipo:        ['Consulta General', Validators.required],
    hora:        ['09:00'],
    temperatura: [null as number | null],
    subjetivo:   [''],
    objetivo:    [''],
    evaluacion:  ['', Validators.required],
    plan:        [''],
  });

  submitting = false;

  submit() {
    if (this.form.invalid) return;
    this.submitting = true;
    const v = this.form.value;
    const today = new Date().toISOString().split('T')[0];
    const existingIds = this.store.consultations().map(c => parseInt(c.id?.replace('C-', '') ?? '0', 10)).filter(n => !isNaN(n));
    const nextNum = (existingIds.length ? Math.max(...existingIds) : 1240) + 1;
    const id = `C-${nextNum}`;
    const body = { id, mascotaId: v.mascotaId, veterinarioId: 1, fecha: `${today}T${v.hora}:00`, tipo: v.tipo, temperatura: v.temperatura, subjetivo: v.subjetivo, objetivo: v.objetivo, evaluacion: v.evaluacion, diagnostico: v.evaluacion, plan: v.plan, estado: 'Completada', cerrada: false };
    this.svc.createConsulta(body).subscribe({
      next: () => { this.snack.open('Consulta registrada', 'OK', { duration: 3000 }); this.ref.close(true); },
      error: () => { this.snack.open('Error al guardar', '', { duration: 3000 }); this.submitting = false; },
    });
  }
}
