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
    peso:            [this.data?.patient ? parseFloat(this.data.patient.weight) : null, [Validators.required, Validators.min(0.1)]],
    especieId:       [null as number | null, Validators.required],
    razaId:          [null as number | null, Validators.required],
    clienteId:       [null as number | null, Validators.required],
    alergias:        [this.data?.patient?.alergias ?? ''],
  });

  razasFiltradas = computed(() => {
    const eid = Number(this.form.value.especieId ?? 0);
    return this.store.rawRazas().filter(r => Number(r.especieId) === eid);
  });

  submitting = false;

  submit() {
    if (this.form.invalid) return;
    this.submitting = true;
    const v = this.form.value;
    const body = {
      nombre:          v.nombre,
      sexo:            v.sexo,
      fechaNacimiento: v.fechaNacimiento,
      peso:            Number(v.peso),
      clienteId:       Number(v.clienteId),
      razaId:          Number(v.razaId),
      estado:          'Activo',
      alergias:        v.alergias ?? '',
    };
    const req = this.isEdit
      ? this.svc.updateMascota(this.data!.patient!.id, body)
      : this.svc.createMascota(body);
    req.subscribe({
      next: () => { this.snack.open(this.isEdit ? 'Paciente actualizado' : 'Paciente registrado', 'OK', { duration: 3000 }); this.ref.close(true); },
      error: () => { this.snack.open('Error al guardar', '', { duration: 3000 }); this.submitting = false; },
    });
  }
}
