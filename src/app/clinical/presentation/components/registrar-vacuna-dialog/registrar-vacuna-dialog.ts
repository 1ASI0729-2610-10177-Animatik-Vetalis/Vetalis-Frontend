import { Component, inject, signal, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { startWith } from 'rxjs';
import { ClinicalStore } from '../../../application/clinical.store';
import { ClinicalService } from '../../../infrastructure/services/clinical.service';
import { AuthStore } from '../../../../iam/application/auth.store';
import { ReminderStore } from '../../../../communication/application/reminder.store';

@Component({
  selector: 'app-registrar-vacuna-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, DecimalPipe, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './registrar-vacuna-dialog.html',
})
export class RegistrarVacunaDialog {
  private fb            = inject(FormBuilder);
  private ref           = inject(MatDialogRef<RegistrarVacunaDialog>);
  private svc           = inject(ClinicalService);
  private snack         = inject(MatSnackBar);
  private auth          = inject(AuthStore);
  private reminderStore = inject(ReminderStore);
  readonly store        = inject(ClinicalStore);
  readonly data         = inject(MAT_DIALOG_DATA, { optional: true }) as { patientId?: string } | null;

  today = new Date().toISOString().split('T')[0];

  medicamentos = signal<any[]>([]);
  loadingMeds  = signal(true);

  metodos = ['Efectivo','Tarjeta','Transferencia','QR/Yape'];

  form = this.fb.group({
    mascotaId:       [this.data?.patientId ?? '', Validators.required],
    medicamentoId:   ['', Validators.required],
    fechaAplicacion: [this.today, Validators.required],
    proximaDosis:    [''],
    lote:            [''],
    observaciones:   [''],
    metodoPago:      ['Efectivo'],
  });

  private mascotaIdValue = toSignal(
    this.form.controls.mascotaId.valueChanges.pipe(startWith(this.data?.patientId ?? null)),
    { initialValue: this.data?.patientId ?? null }
  );

  allergyWarning = computed(() => {
    const mid = this.mascotaIdValue();
    if (!mid) return null;
    const patient = this.store.patients().find(p => String(p.id) === String(mid));
    return patient?.alergias || null;
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
    const mascotaId = Number(v.mascotaId);
    const fecha = `${v.fechaAplicacion}T09:00:00`;
    const body = {
      mascotaId,
      tipoVacunaId:    Number(v.medicamentoId),
      nombreVacuna:    med?.nombre ?? 'Vacuna',
      lote:            v.lote || null,
      fechaAplicacion: v.fechaAplicacion,
      proximaDosis:    v.proximaDosis || null,
      estado:          'Aplicada',
      veterinarioId:   Number(this.auth.user()?.id ?? 0),
    };
    this.svc.createVacuna(body).subscribe({
      next: (vacunaCreada: any) => {
        const monto = med?.precioUnitario ?? 0;
        if (monto > 0) {
          const pagoBody = {
            mascotaId,
            medicamentoId: Number(v.medicamentoId),
            monto,
            metodoPago:    v.metodoPago ?? 'Efectivo',
            fechaPago:     fecha,
            estado:        'Pagado',
            descripcion:   `Vacuna: ${med?.nombre ?? 'Vacuna'}`,
          };
          this.svc.createPago(pagoBody).subscribe({
            next:  () => {},
            error: (e) => console.warn('Pago no registrado:', e),
          });
        }
        if (v.proximaDosis) {
          const patient = this.store.patients().find(p => String(p.id) === String(v.mascotaId));
          this.reminderStore.add({
            icon: 'vaccines',
            title: `Próxima dosis: ${med?.nombre ?? 'Vacuna'}`,
            desc: `${patient?.name ?? 'Paciente'} · ${v.proximaDosis}`,
            color: '#EF4444',
            bg: '#FEE2E2',
          });
        }
        this.snack.open('Vacuna y cobro registrados', 'OK', { duration: 3000 });
        this.ref.close(true);
      },
      error: () => { this.snack.open('Error al guardar', '', { duration: 3000 }); this.submitting = false; },
    });
  }
}
