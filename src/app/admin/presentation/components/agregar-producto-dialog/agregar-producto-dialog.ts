import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../../infrastructure/services/admin.service';

@Component({
  selector: 'app-agregar-producto-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './agregar-producto-dialog.html',
})
export class AgregarProductoDialog {
  private fb    = inject(FormBuilder);
  private ref   = inject(MatDialogRef<AgregarProductoDialog>);
  private svc   = inject(AdminService);
  private snack = inject(MatSnackBar);
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
      this.snack.open('El producto ya existe en el sistema', '', { duration: 3000 });
      return;
    }

    const medIds = this.data.medicamentos.map(m => parseInt(m.id, 10)).filter(n => !isNaN(n));
    const nextMedId = String((medIds.length ? Math.max(...medIds) : 0) + 1);

    const invIds = this.data.inventario.map(i => parseInt(i.id, 10)).filter(n => !isNaN(n));
    const nextInvId = String((invIds.length ? Math.max(...invIds) : 0) + 1);

    this.submitting = true;
    this.svc.createMedicamento({ id: nextMedId, nombre: v.nombre!.trim(), descripcion: v.descripcion, unidad: v.unidad }).subscribe({
      next: (med: any) => {
        this.svc.createInventario({ id: nextInvId, medicamentoId: parseInt(med.id, 10), stockActual: v.stockInicial, puntoReorden: v.puntoReorden }).subscribe({
          next: () => { this.snack.open('Producto agregado correctamente', 'OK', { duration: 3000 }); this.ref.close(true); },
          error: () => { this.snack.open('Error al guardar inventario', '', { duration: 3000 }); this.submitting = false; },
        });
      },
      error: () => { this.snack.open('Error al guardar producto', '', { duration: 3000 }); this.submitting = false; },
    });
  }
}
