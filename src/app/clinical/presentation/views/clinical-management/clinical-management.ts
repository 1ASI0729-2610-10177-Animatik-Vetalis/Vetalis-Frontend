import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ClinicalStore } from '../../../application/clinical.store';
import { ClinicalService } from '../../../infrastructure/services/clinical.service';
import { Patient } from '../../../domain/model/patient.model';
import { NuevaCitaDialog } from '../../components/nueva-cita-dialog/nueva-cita-dialog';
import { NuevaConsultaDialog } from '../../components/nueva-consulta-dialog/nueva-consulta-dialog';
import { RegistrarPacienteDialog } from '../../components/registrar-paciente-dialog/registrar-paciente-dialog';
import { RegistrarVacunaDialog } from '../../components/registrar-vacuna-dialog/registrar-vacuna-dialog';
import { RegistrarIngresoDialog } from '../../components/registrar-ingreso-dialog/registrar-ingreso-dialog';
import { RegistrarClienteDialog } from '../../components/registrar-cliente-dialog/registrar-cliente-dialog';

const PAGE_SIZE = 5;

@Component({
  selector: 'app-clinical-management',
  imports: [NgClass, MatIconModule, MatButtonModule, MatTabsModule, MatSelectModule, FormsModule, MatDialogModule, TranslatePipe],
  templateUrl: './clinical-management.html',
  styleUrl: './clinical-management.css'
})
export class ClinicalManagement {
  store          = inject(ClinicalStore);
  private svc    = inject(ClinicalService);
  private dialog = inject(MatDialog);
  private snack  = inject(MatSnackBar);
  private translate = inject(TranslateService);

  activeTab = 0;

  // ── Filters ───────────────────────────────────────────────────
  patientSearch         = '';
  clientSearch          = '';
  speciesFilter         = 'Todas';
  vaccineFilter         = 'Todas';
  hospitalizationFilter = 'Todos';
  consultDateFilter: 'all' | 'today' | 'week' = 'all';

  vaccineFilters = [
    { value: 'Todas',    labelKey: 'clinical.vaccines.filterAll'      },
    { value: 'Próximas', labelKey: 'clinical.vaccines.filterUpcoming'  },
    { value: 'Vencidas', labelKey: 'clinical.vaccines.filterExpired'   },
  ];

  hospFilters = [
    { value: 'Todos',        labelKey: 'clinical.hospitalization.filterAll'      },
    { value: 'Crítico',      labelKey: 'clinical.hospitalization.filterCritical' },
    { value: 'Estable',      labelKey: 'clinical.hospitalization.filterStable'   },
    { value: 'Recuperación', labelKey: 'clinical.hospitalization.filterRecovery' },
  ];

  // ── Pagination ────────────────────────────────────────────────
  consultPage = 1;

  // ── Patients ──────────────────────────────────────────────────
  get filteredPatients() {
    const s = this.patientSearch.toLowerCase();
    return this.store.patients().filter(p =>
      (s === '' || p.name.toLowerCase().includes(s) || p.owner.toLowerCase().includes(s) || p.id.includes(s)) &&
      (this.speciesFilter === 'Todas' || p.species === this.speciesFilter)
    );
  }

  // ── Clients ───────────────────────────────────────────────────
  get filteredClients() {
    const s = this.clientSearch.toLowerCase();
    return this.store.rawClientes().filter(c =>
      s === '' || c.nombre?.toLowerCase().includes(s) || c.dni?.includes(s) || c.email?.toLowerCase().includes(s)
    );
  }

  // ── Consultations ─────────────────────────────────────────────
  get filteredConsultations() {
    const today   = new Date().toISOString().split('T')[0];
    const weekAgo = new Date(Date.now() - 7 * 864e5).toISOString().split('T')[0];
    return this.store.consultations().filter(c => {
      if (this.consultDateFilter === 'today') return c.rawDate === today;
      if (this.consultDateFilter === 'week')  return c.rawDate >= weekAgo;
      return true;
    });
  }

  get consultTotalPages() { return Math.max(1, Math.ceil(this.filteredConsultations.length / PAGE_SIZE)); }

  get pagedConsultations() {
    const start = (this.consultPage - 1) * PAGE_SIZE;
    return this.filteredConsultations.slice(start, start + PAGE_SIZE);
  }

  get consultPageNumbers() { return Array.from({ length: this.consultTotalPages }, (_, i) => i + 1); }

  setConsultFilter(f: 'all' | 'today' | 'week') { this.consultDateFilter = f; this.consultPage = 1; }

  // ── Vaccines ─────────────────────────────────────────────────
  get filteredVaccines() {
    if (this.vaccineFilter === 'Próximas') return this.store.vaccines().filter(v => v.status === 'Próxima');
    if (this.vaccineFilter === 'Vencidas') return this.store.vaccines().filter(v => v.status === 'Vencida');
    return this.store.vaccines();
  }

  get vaccineSummary() {
    const vs = this.store.vaccines();
    return [
      { labelKey: 'clinical.vaccines.summaryExpired',  sublabelKey: 'clinical.vaccines.summaryExpiredSub',  value: vs.filter(v => v.status === 'Vencida').length,  color: '#EF4444', bg: '#FEF2F2', icon: 'error'        },
      { labelKey: 'clinical.vaccines.summaryUpcoming', sublabelKey: 'clinical.vaccines.summaryUpcomingSub', value: vs.filter(v => v.status === 'Próxima').length,  color: '#F59E0B', bg: '#FFFBEB', icon: 'schedule'     },
      { labelKey: 'clinical.vaccines.summaryUpToDate', sublabelKey: 'clinical.vaccines.summaryUpToDateSub', value: vs.filter(v => v.status === 'Al Día').length,   color: '#22C55E', bg: '#F0FDF4', icon: 'check_circle' },
    ];
  }

  // ── Hospitalizations ─────────────────────────────────────────
  get filteredHospitalizations() {
    if (this.hospitalizationFilter === 'Todos') return this.store.hospitalizations();
    return this.store.hospitalizations().filter(h => h.status === this.hospitalizationFilter);
  }

  getHospCount(status: string): number {
    if (status === 'Todos') return this.store.hospitalizations().length;
    return this.store.hospitalizations().filter(h => h.status === status).length;
  }

  get hospitalStats() {
    const hs = this.store.hospitalizations();
    return [
      { labelKey: 'clinical.hospitalization.statTotal',    sublabelKey: 'clinical.hospitalization.statTotalSub',    value: hs.length,                                         icon: 'local_hospital', color: '#3B82F6', bg: '#EFF6FF' },
      { labelKey: 'clinical.hospitalization.statCritical', sublabelKey: 'clinical.hospitalization.statCriticalSub', value: hs.filter(h => h.status === 'Crítico').length,     icon: 'favorite',       color: '#EF4444', bg: '#FEF2F2' },
      { labelKey: 'clinical.hospitalization.statRecovery', sublabelKey: 'clinical.hospitalization.statRecoverySub', value: hs.filter(h => h.status === 'Recuperación').length, icon: 'person',         color: '#F59E0B', bg: '#FFFBEB' },
    ];
  }

  // ── Historial ─────────────────────────────────────────────────
  get selectedConsultations() {
    const p = this.store.selectedPatient();
    if (!p) return [];
    return this.store.consultations().filter(c => c.mascotaId === p.id);
  }

  get historyPatient() {
    const p = this.store.selectedPatient();
    if (!p) return null;
    const sc = this.selectedConsultations;
    return {
      name: p.name, breed: p.breed, age: p.age, owner: p.owner, avatarColor: p.avatarColor,
      stats: [
        { labelKey: 'clinical.history.statTotalConsults',    value: String(sc.length) },
        { labelKey: 'clinical.history.statVaccinesApplied',  value: String(this.store.vaccines().filter(v => v.mascotaId === p.id).length) },
        { labelKey: 'clinical.history.statHospitalizations', value: String(this.store.hospitalizations().filter(h => h.mascotaId === p.id).length) },
        { labelKey: 'clinical.history.statLastVisit',        value: sc.length > 0 ? sc[0].date : '—' },
      ]
    };
  }

  get historyRecords() {
    return this.selectedConsultations.map(c => ({
      type: c.type, date: c.date, doctor: c.veterinario ?? 'Veterinario',
      color: c.cerrada ? '#64748B' : '#22C55E',
      bg: c.cerrada ? '#F1F5F9' : '#F0FDF4',
      borderColor: c.cerrada ? '#94A3B8' : '#22C55E',
      icon: c.cerrada ? 'lock' : 'medical_services',
      temperatura: c.temperatura,
      cerrada: c.cerrada,
      sections: [
        ...(c.subjetivo  ? [{ label: 'Subjetivo (S)',   type: 'text', content: c.subjetivo  }] : []),
        ...(c.objetivo   ? [{ label: 'Objetivo (O)',    type: 'text', content: c.objetivo   }] : []),
        ...(c.diagnosis  ? [{ label: 'Evaluación (A)',  type: 'text', content: c.diagnosis  }] : []),
        ...(c.plan       ? [{ label: 'Plan (P)',        type: 'text', content: c.plan       }] : []),
      ],
    }));
  }

  // ── Badge helpers ─────────────────────────────────────────────
  getConsultBadge(status: string): string {
    const map: Record<string, string> = { 'Completada': 'badge-completada', 'En Proceso': 'badge-en-proceso', 'Crítico': 'badge-critico', 'Pendiente': 'badge-pendiente' };
    return map[status] ?? '';
  }

  getVaccineBadge(status: string): string {
    const map: Record<string, string> = { 'Al Día': 'badge-al-dia', 'Próxima': 'badge-proxima', 'Vencida': 'badge-vencida' };
    return map[status] ?? '';
  }

  getHospBadge(status: string): string {
    const map: Record<string, string> = { 'Crítico': 'badge-critico', 'Estable': 'badge-estable', 'Recuperación': 'badge-recuperacion' };
    return map[status] ?? '';
  }

  // ── Navigation ────────────────────────────────────────────────
  verFicha(patientId: string) {
    this.store.selectPatient(patientId);
    this.activeTab = 3;
  }

  // ── Dialogs ───────────────────────────────────────────────────
  openNuevaConsulta(patientId?: string) {
    this.dialog.open(NuevaConsultaDialog, { width: '640px', data: { patientId } })
      .afterClosed().subscribe(ok => { if (ok) this.store.reload(); });
  }

  openRegistrarPaciente(patient?: Patient) {
    this.dialog.open(RegistrarPacienteDialog, { width: '580px', data: { patient } })
      .afterClosed().subscribe(ok => { if (ok) this.store.reload(); });
  }

  openNuevaCita(patientId?: string) {
    this.dialog.open(NuevaCitaDialog, { width: '520px', data: { patientId } })
      .afterClosed().subscribe(ok => { if (ok) this.store.reload(); });
  }

  openRegistrarVacuna(patientId?: string) {
    this.dialog.open(RegistrarVacunaDialog, { width: '560px', data: { patientId } })
      .afterClosed().subscribe(ok => { if (ok) this.store.reload(); });
  }

  openRegistrarIngreso(patientId?: string) {
    this.dialog.open(RegistrarIngresoDialog, { width: '560px', data: { patientId } })
      .afterClosed().subscribe(ok => { if (ok) this.store.reload(); });
  }

  openRegistrarCliente() {
    this.dialog.open(RegistrarClienteDialog, { width: '500px' })
      .afterClosed().subscribe(ok => { if (ok) this.store.reload(); });
  }

  deletePatient(patient: Patient) {
    const msg = this.translate.instant('clinical.messages.confirmDelete', { name: patient.name });
    if (!confirm(msg)) return;
    this.svc.deleteMascota(patient.id).subscribe({
      next: () => {
        this.snack.open(this.translate.instant('clinical.messages.patientDeleted'), 'OK', { duration: 3000 });
        this.store.reload();
      },
      error: () => this.snack.open(this.translate.instant('clinical.messages.deleteError'), '', { duration: 3000 }),
    });
  }

  closeConsulta(consultaId: string) {
    const msg = this.translate.instant('clinical.consultations.confirmClose');
    if (!confirm(msg)) return;
    this.svc.closeConsulta(consultaId).subscribe({
      next: () => {
        this.snack.open(this.translate.instant('clinical.consultations.closedSuccess'), 'OK', { duration: 3000 });
        this.store.reload();
      },
      error: () => this.snack.open(this.translate.instant('clinical.messages.deleteError'), '', { duration: 3000 }),
    });
  }

  get historyAllergyAlert(): string {
    const p = this.store.selectedPatient();
    return p?.alergias ?? '';
  }
}