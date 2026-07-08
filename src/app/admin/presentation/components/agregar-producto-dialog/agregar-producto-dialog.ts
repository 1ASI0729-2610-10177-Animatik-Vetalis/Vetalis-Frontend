import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AdminService } from '../../../infrastructure/services/admin.service';

@Component({
  selector: 'app-agregar-producto-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule, MatButtonModule, MatIconModule, TranslatePipe],
  templateUrl: './agregar-producto-dialog.html',
})
export class AgregarProductoDialog {
  private fb        = inject(FormBuilder);
  private ref       = inject(MatDialogRef<AgregarProductoDialog>);
  private svc       = inject(AdminService);
  private snack     = inject(MatSnackBar);
  private translate = inject(TranslateService);
  readonly data = inject(MAT_DIALOG_DATA) as { medicamentos: any[]; inventario: any[] };

  unidades = ['comprimidos', 'ampollas', 'frascos', 'dosis', 'bolsas', 'unidades'];
  submitting = false;

  form = this.fb.group({
    nombre:       ['', Validators.required],
    descripcion:  [''],
    unidad:       ['comprimidos', Validators.required],
    stockInicial: [0, [Validators.required, Validators.min(0)]],
    puntoReorden: [10, [Validators.required, Validators.min(1)]],
  });

  submit() {
    if (this.form.invalid) return;
    const v = this.form.value;

    const duplicate = this.data.medicamentos.find(
      m => m.nombre.toLowerCase() === v.nombre!.trim().toLowerCase()
    );
    if (duplicate) {
      this.snack.open(this.translate.instant('admin.dialog.duplicate'), '', { duration: 3000 });
      return;
    }

    this.submitting = true;
    // El medicamento ya incluye el stock (stockActual, puntoReorden, precioUnitario).
    this.svc.createMedicamento({
      nombre:         v.nombre!.trim(),
      descripcion:    v.descripcion ?? '',
      precioUnitario: 10,
      stockActual:    v.stockInicial,
      puntoReorden:   v.puntoReorden,
    }).subscribe({
      next: () => { this.snack.open(this.translate.instant('admin.dialog.successMsg'), 'OK', { duration: 3000 }); this.ref.close(true); },
      error: () => { this.snack.open(this.translate.instant('admin.dialog.errorProduct'), '', { duration: 3000 }); this.submitting = false; },
    });
  }
}
