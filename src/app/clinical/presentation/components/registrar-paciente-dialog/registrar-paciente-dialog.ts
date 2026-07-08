import { Component, inject, computed } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClinicalStore } from '../../../application/clinical.store';
import { ClinicalService } from '../../../infrastructure/services/clinical.service';
import { Patient } from '../../../domain/model/patient.model';

@Component({
  selector: 'app-registrar-paciente-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './registrar-paciente-dialog.html',
})
export class RegistrarPacienteDialog {
  private fb     = inject(FormBuilder);
  private ref    = inject(MatDialogRef<RegistrarPacienteDialog>);
  private svc    = inject(ClinicalService);
  private snack  = inject(MatSnackBar);
  readonly store = inject(ClinicalStore);
  readonly data  = inject(MAT_DIALOG_DATA, { optional: true }) as { patient?: Patient } | null;

  isEdit = !!this.data?.patient;

  form = this.fb.group({
    nombre:          [this.data?.patient?.name ?? '', Validators.required],
    sexo:            ['Macho', Validators.required],
    fechaNacimiento: ['', Validators.required],
    peso:            [this.data?.patient ? parseFloat(this.data.patient.weight) : 0, [Validators.required, Validators.min(0.1)]],
    especieId:       [1, Validators.required],
    razaId:          [1, Validators.required],
    clienteId:       [1, Validators.required],
    alergias:        [this.data?.patient?.alergias ?? ''],
  });

  razasFiltradas = computed(() =>
    this.store.rawRazas().filter(r => r.especieId === this.form.value.especieId)
  );

  submitting = false;

  submit() {
    if (this.form.invalid) return;
    this.submitting = true;
    const v = this.form.value;
    const existingIds = this.store.rawMascotas().map(m => parseInt(m.id?.replace('P-', '') ?? '0', 10)).filter(n => !isNaN(n));
    const nextNum = (existingIds.length ? Math.max(...existingIds) : 0) + 1;
    const id = `P-${String(nextNum).padStart(3, '0')}`;
    const body = { id, nombre: v.nombre, sexo: v.sexo, fechaNacimiento: v.fechaNacimiento, peso: v.peso, clienteId: v.clienteId, especieId: v.especieId, razaId: v.razaId, estado: 'Activo', alergias: v.alergias ?? '' };
    const req = this.isEdit
      ? this.svc.updateMascota(this.data!.patient!.id, body)
      : this.svc.createMascota(body);
    req.subscribe({
      next: () => { this.snack.open(this.isEdit ? 'Paciente actualizado' : 'Paciente registrado', 'OK', { duration: 3000 }); this.ref.close(true); },
      error: () => { this.snack.open('Error al guardar', '', { duration: 3000 }); this.submitting = false; },
    });
  }
}
