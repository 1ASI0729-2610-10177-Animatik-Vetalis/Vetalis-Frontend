import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DecimalPipe } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AdminService } from '../../../infrastructure/services/admin.service';

@Component({
  selector: 'app-registrar-pago-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule, MatButtonModule, MatIconModule, DecimalPipe, TranslatePipe],
  templateUrl: './registrar-pago-dialog.html',
})
export class RegistrarPagoDialog {
  private fb        = inject(FormBuilder);
  private ref       = inject(MatDialogRef<RegistrarPagoDialog>);
  private svc       = inject(AdminService);
  private snack     = inject(MatSnackBar);
  private translate = inject(TranslateService);
  readonly data = inject(MAT_DIALOG_DATA) as { mascotas: any[]; clientes: any[] };

  Math = Math;
  metodos = ['Efectivo', 'Tarjeta', 'Transferencia', 'Yape', 'Plin'];
  submitting = false;

  form = this.fb.group({
    mascotaId:    ['', Validators.required],
    descripcion:  ['Consulta veterinaria', Validators.required],
    montoOriginal:[0, [Validators.required, Validators.min(1)]],
    descuento:    [0, [Validators.min(0), Validators.max(50)]],
    metodoPrincipal: ['Efectivo', Validators.required],
    montoPrincipal:  [0, [Validators.required, Validators.min(0)]],
    metodoSecundario:[''],
    montoSecundario: [0, [Validators.min(0)]],
  });

  get montoOriginal(): number { return this.form.value.montoOriginal ?? 0; }
  get descuento(): number     { return this.form.value.descuento ?? 0; }
  get montoFinal(): number    { return this.montoOriginal * (1 - this.descuento / 100); }

  get montoRestante(): number {
    const principal  = this.form.value.montoPrincipal ?? 0;
    const secundario = this.form.value.montoSecundario ?? 0;
    return this.montoFinal - principal - secundario;
  }

  autoFillPrincipal() {
    this.form.patchValue({ montoPrincipal: Math.round(this.montoFinal * 100) / 100 });
  }

  get clienteNombre(): string {
    const mascotaId = this.form.value.mascotaId;
    const m = this.data.mascotas.find(x => String(x.id) === String(mascotaId));
    const c = this.data.clientes.find(x => String(x.id) === String(m?.clienteId));
    return c?.nombre ?? '';
  }

  submit() {
    if (this.form.invalid) return;
    if (Math.abs(this.montoRestante) > 0.01) {
      this.snack.open(this.translate.instant('admin.payments.unbalanced', { amount: Math.abs(this.montoRestante).toFixed(2) }), '', { duration: 3000 });
      return;
    }
    this.submitting = true;
    const v = this.form.value;
    const today = new Date().toISOString();
    const body: any = {
      mascotaId:    v.mascotaId,
      descripcion:  v.descripcion,
      montoOriginal: v.montoOriginal,
      descuento:    v.descuento,
      monto:        Math.round(this.montoFinal * 100) / 100,
      metodoPago:   v.metodoPrincipal,
      fechaPago:    today,
      estado:       'Pagado',
    };
    if (v.metodoSecundario && (v.montoSecundario ?? 0) > 0) {
      body.metodoPago2   = v.metodoSecundario;
      body.monto2        = v.montoSecundario;
    }
    this.svc.createPago(body).subscribe({
      next: () => {
        this.snack.open(this.translate.instant('admin.payments.successMsg'), 'OK', { duration: 3000 });
        this.ref.close(true);
      },
      error: () => {
        this.snack.open(this.translate.instant('admin.payments.errorMsg'), '', { duration: 3000 });
        this.submitting = false;
      },
    });
  }
}
