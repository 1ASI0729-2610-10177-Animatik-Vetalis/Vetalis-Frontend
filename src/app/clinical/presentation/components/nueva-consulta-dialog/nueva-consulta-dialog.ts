import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClinicalStore } from '../../../application/clinical.store';
import { ClinicalService } from '../../../infrastructure/services/clinical.service';
import { AuthStore } from '../../../../iam/application/auth.store';

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
  private auth   = inject(AuthStore);
  readonly store = inject(ClinicalStore);
  readonly data  = inject(MAT_DIALOG_DATA, { optional: true }) as { patientId?: string | number } | null;

  tipos   = ['Consulta General','Vacunación','Emergencia','Cirugía','Control','Dermatología','Post-Operatorio'];
  metodos = ['Efectivo','Tarjeta','Transferencia','QR/Yape'];

  form = this.fb.group({
    mascotaId:   [this.data?.patientId ?? ''],
    tipo:        ['Consulta General'],
    hora:        ['09:00'],
    temperatura: [null as number | null],
    subjetivo:   [''],
    objetivo:    [''],
    evaluacion:  [''],
    plan:        [''],
    monto:       [50.00],
    metodoPago:  ['Efectivo'],
  });

  submitting = false;

  submit() {
    const v = this.form.value;
    const mascotaId = Number(v.mascotaId);
    if (!mascotaId) {
      this.snack.open('Debes seleccionar un paciente', 'OK', { duration: 3000 });
      return;
    }
    const veterinarioId = Number(this.auth.user()?.id ?? 0);
    if (!veterinarioId) {
      this.snack.open('Sesión expirada. Vuelve a iniciar sesión.', 'OK', { duration: 4000 });
      return;
    }
    this.submitting = true;
    const today = new Date().toISOString().split('T')[0];
    const hora  = v.hora ?? '09:00';
    const fecha = `${today}T${hora}:00`;
    const consultaBody = {
      mascotaId,
      veterinarioId,
      fecha,
      tipo:        v.tipo ?? 'Consulta General',
      temperatura: v.temperatura ?? null,
      subjetivo:   v.subjetivo  || null,
      objetivo:    v.objetivo   || null,
      evaluacion:  v.evaluacion || null,
      diagnostico: v.evaluacion || null,
      plan:        v.plan       || null,
      estado:      'Abierta',
    };
    this.svc.createConsulta(consultaBody).subscribe({
      next: (consultaCreada: any) => {
        const pagoBody = {
          consultaId:  consultaCreada?.id ?? null,
          mascotaId,
          monto:       Number(v.monto) || 50,
          metodoPago:  v.metodoPago ?? 'Efectivo',
          fechaPago:   fecha,
          estado:      'Pagado',
          descripcion: `Consulta ${v.tipo ?? 'General'}`,
        };
        this.svc.createPago(pagoBody).subscribe({
          next:  () => {},
          error: (e) => console.warn('Pago no registrado:', e),
        });
        this.snack.open('Consulta y cobro registrados', 'OK', { duration: 3000 });
        this.ref.close(true);
      },
      error: (err) => {
        const msg = err?.error?.message ?? JSON.stringify(err?.error) ?? `HTTP ${err?.status}`;
        console.error('Error al crear consulta:', err);
        this.snack.open(`Error: ${msg}`, '', { duration: 6000 });
        this.submitting = false;
      },
    });
  }
}
