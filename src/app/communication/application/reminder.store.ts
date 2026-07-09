import { Injectable, signal } from '@angular/core';

export interface ReminderEntry {
  id: string;
  icon: string;
  title: string;
  desc: string;
  color: string;
  bg: string;
}

@Injectable({ providedIn: 'root' })
export class ReminderStore {
  readonly reminders = signal<ReminderEntry[]>([
    { id: 'r1', icon: 'medical_services', title: 'Consulta próxima',    desc: 'Simba · 10:00 AM · Consulta de rutina',           color: '#3B82F6', bg: '#DBEAFE' },
    { id: 'r2', icon: 'medication',       title: 'Medicación activa',   desc: 'Luna · Amoxicilina 250mg · 5 días restantes',     color: '#F59E0B', bg: '#FEF9C3' },
    { id: 'r3', icon: 'vaccines',         title: 'Próxima vacuna',      desc: 'Rocky · Vacuna antirrábica · En 7 días',          color: '#EF4444', bg: '#FEE2E2' },
    { id: 'r4', icon: 'monitor_heart',    title: 'Control tratamiento', desc: 'Max · Revisión post-cirugía · Mañana 14:00',      color: '#8B5CF6', bg: '#EDE9FE' },
  ]);

  add(entry: Omit<ReminderEntry, 'id'>) {
    const id = Date.now().toString() + Math.random().toString(36).slice(2);
    this.reminders.update(list => [{ ...entry, id }, ...list]);
  }

  remove(id: string) {
    this.reminders.update(list => list.filter(r => r.id !== id));
  }
}
