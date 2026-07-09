import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClinicalStore } from '../../../application/clinical.store';
import { ClinicalService } from '../../../infrastructure/services/clinical.service';
import { AuthStore } from '../../../../iam/application/auth.store';
import { IotService } from '../../../../iot/infrastructure/services/iot.service';

@Component({
  selector: 'app-registrar-ingreso-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './registrar-ingreso-dialog.html',
})
export class RegistrarIngresoDialog {
  private fb     = inject(FormBuilder);
  private ref    = inject(MatDialogRef<RegistrarIngresoDialog>);
  private svc    = inject(ClinicalService);
  private iotSvc = inject(IotService);
  private snack  = inject(MatSnackBar);
  private auth   = inject(AuthStore);
  readonly store = inject(ClinicalStore);
  readonly data  = inject(MAT_DIALOG_DATA, { optional: true }) as { patientId?: string } | null;

  today  = new Date().toISOString().split('T')[0];
  estados = ['Estable', 'Crítico', 'Recuperación'];

  form = this.fb.group({
    mascotaId:     [this.data?.patientId ?? '', Validators.required],
    fechaIngreso:  [this.today, Validators.required],
    diagnostico:   ['', Validators.required],
    tratamiento:   ['', Validators.required],
    estado:        ['Estable', Validators.required],
    observaciones: [''],
  });

  submitting = false;

  submit() {
    if (this.form.invalid) return;
    this.submitting = true;
    const v = this.form.value;
    const body = {
      mascotaId:    Number(v.mascotaId),
      veterinarioId: Number(this.auth.user()?.id ?? 0),
      fechaIngreso: `${v.fechaIngreso}T00:00:00`,
      motivo:       v.diagnostico,
      diagnostico:  v.diagnostico,
      tratamiento:  v.tratamiento,
      estado:       v.estado,
    };
    this.svc.createHospitalizacion(body).subscribe({
      next: () => {
        // Auto-assign first free dispenser to this patient
        this.iotSvc.getAll().subscribe({
          next: dispensadores => {
            const libre = dispensadores.find((d: any) => d.estado === 'INACTIVO' && !d.mascotaId);
            if (libre) {
              this.iotSvc.update(libre.id, {
                numeroSerie:   libre.numeroSerie,
                modelo:        libre.modelo,
                estado:        'ACTIVO',
                nivelAlimento: libre.nivelAlimento,
                ultimaConexion: new Date().toISOString(),
                mascotaId:     Number(v.mascotaId),
              }).subscribe({
                next: () => this.snack.open('Ingreso registrado · Dispensador asignado automáticamente', 'OK', { duration: 4000 }),
                error: () => this.snack.open('Ingreso registrado · Sin dispensadores disponibles', 'OK', { duration: 3000 }),
              });
            } else {
              this.snack.open('Ingreso registrado · No hay dispensadores libres disponibles', 'OK', { duration: 3000 });
            }
          },
          error: () => this.snack.open('Ingreso registrado', 'OK', { duration: 3000 }),
        });
        this.ref.close(true);
      },
      error: () => { this.snack.open('Error al guardar', '', { duration: 3000 }); this.submitting = false; },
    });
  }
}
