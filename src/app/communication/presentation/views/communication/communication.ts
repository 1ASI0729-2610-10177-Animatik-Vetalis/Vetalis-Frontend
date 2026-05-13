import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-communication',
  imports: [MatIconModule, MatButtonModule, TranslatePipe],
  templateUrl: './communication.html',
  styleUrl: './communication.css'
})
export class Communication {
  notifications = [
    { icon: 'event',        titleKey: 'communication.notifications.newAppointment',    desc: 'Max - Perro · Mañana 09:00 AM',                          time: 'Hace 5 min',   type: 'blue',   read: false },
    { icon: 'vaccines',     titleKey: 'communication.notifications.pendingVaccine',     desc: 'Luna - Gato · Vacuna trivalente vence en 3 días',        time: 'Hace 1 hora',  type: 'yellow', read: false },
    { icon: 'warning',      titleKey: 'communication.notifications.systemAlert',        desc: 'Stock de medicamentos crítico — revisar inventario',      time: 'Hace 2 horas', type: 'red',    read: false },
    { icon: 'check_circle', titleKey: 'communication.notifications.treatmentComplete',  desc: 'Rocky - Perro · Tratamiento antibiótico finalizado',     time: 'Hace 3 horas', type: 'green',  read: true  },
    { icon: 'chat',         titleKey: 'communication.notifications.newClientMessage',   desc: 'María González pregunta sobre la dieta de Bella',        time: 'Ayer',         type: 'blue',   read: true  },
    { icon: 'event_busy',   titleKey: 'communication.notifications.cancelledAppointment', desc: 'Toby - Perro · Propietario canceló cita del 8/03',    time: 'Ayer',         type: 'gray',   read: true  },
  ];

  reminders = [
    { icon: 'medical_services', titleKey: 'communication.reminders.upcomingConsult',    desc: 'Simba · 10:00 AM · Consulta de rutina',           color: '#3B82F6', bg: '#DBEAFE' },
    { icon: 'medication',       titleKey: 'communication.reminders.ongoingMedication',  desc: 'Luna · Amoxicilina 250mg · 5 días restantes',     color: '#F59E0B', bg: '#FEF9C3' },
    { icon: 'vaccines',         titleKey: 'communication.reminders.upcomingVaccine',    desc: 'Rocky · Vacuna antirrábica · En 7 días',          color: '#EF4444', bg: '#FEE2E2' },
    { icon: 'monitor_heart',    titleKey: 'communication.reminders.treatmentControl',   desc: 'Max · Revisión post-cirugía · Mañana 14:00',      color: '#8B5CF6', bg: '#EDE9FE' },
    { icon: 'science',          titleKey: 'communication.reminders.labResults',         desc: 'Michi · Análisis de sangre · Listos para revisar', color: '#06B6D4', bg: '#E0F2FE' },
  ];

  unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  markAllRead() {
    this.notifications.forEach(n => n.read = true);
  }
}