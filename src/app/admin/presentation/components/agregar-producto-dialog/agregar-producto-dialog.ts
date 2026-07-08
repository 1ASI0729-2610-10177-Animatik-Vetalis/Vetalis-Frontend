import { Component, inject, OnInit } from '@angular/core';
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
export class AgregarProductoDialog implements OnInit {
  private fb        = inject(FormBuilder);
  private ref       = inject(MatDialogRef<AgregarProductoDialog>);
  private svc       = inject(AdminService);
  private snack     = inject(MatSnackBar);
  private translate = inject(TranslateService);
  readonly data = inject(MAT_DIALOG_DATA) as { medicamentos: any[]; inventario: any[]; editando?: any };

  unidades = ['comprimidos', 'ampollas', 'frascos', 'dosis', 'bolsas', 'unidades'];
  submitting = false;
  get isEdit() { return !!this.data?.editando; }

  form = this.fb.group({
    nombre:         ['', Validators.required],
    descripcion:    [''],
    unidad:         ['comprimidos', Validators.required],
    stockInicial:   [0, [Validators.required, Validators.min(0)]],
    puntoReorden:   [10, [Validators.required, Validators.min(1)]],
    precioUnitario: [10, [Validators.required, Validators.min(0)]],
  });

  ngOnInit() {
    if (this.isEdit) {
      const e = this.data.editando;
      this.form.patchValue({
        nombre:         e.nombre ?? '',
        descripcion:    e.descripcion ?? '',
        unidad:         e.unidad ?? 'comprimidos',
        stockInicial:   e.stockActual ?? 0,
        puntoReorden:   e.puntoReorden ?? 10,
        precioUnitario: e.precioUnitario ?? 10,
      });
    }
  }

  submit() {
    if (this.form.invalid) return;
    const v = this.form.value;

    if (!this.isEdit) {
      const duplicate = this.data.medicamentos.find(
        m => m.nombre.toLowerCase() === v.nombre!.trim().toLowerCase()
      );
      if (duplicate) {
        this.snack.open(this.translate.instant('admin.dialog.duplicate'), '', { duration: 3000 });
        return;
      }
    }

    this.submitting = true;
    const body = {
      nombre:         v.nombre!.trim(),
      descripcion:    v.descripcion ?? '',
      precioUnitario: v.precioUnitario,
      stockActual:    v.stockInicial,
      puntoReorden:   v.puntoReorden,
    };

    const call = this.isEdit
      ? this.svc.updateMedicamento(this.data.editando.id, body)
      : this.svc.createMedicamento(body);

    call.subscribe({
      next: () => {
        const msg = this.isEdit ? 'Producto actualizado' : this.translate.instant('admin.dialog.successMsg');
        this.snack.open(msg, 'OK', { duration: 3000 });
        this.ref.close(true);
      },
      error: () => {
        this.snack.open(this.translate.instant('admin.dialog.errorProduct'), '', { duration: 3000 });
        this.submitting = false;
      },
    });
  }
}
