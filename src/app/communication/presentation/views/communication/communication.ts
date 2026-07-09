import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';
import { ReminderStore } from '../../../application/reminder.store';

@Component({
  selector: 'app-communication',
  imports: [MatIconModule, MatButtonModule, TranslatePipe],
  templateUrl: './communication.html',
  styleUrl: './communication.css'
})
export class Communication {
  private reminderStore = inject(ReminderStore);

  reminders = this.reminderStore.reminders;

  notifications = [
    { icon: 'event',        title: 'Nueva cita agendada',      desc: 'Max - Perro · Mañana 09:00 AM',                       time: 'Hace 5 min',   type: 'blue',   read: false },
    { icon: 'vaccines',     title: 'Vacuna pendiente',         desc: 'Luna - Gato · Vacuna trivalente vence en 3 días',     time: 'Hace 1 hora',  type: 'yellow', read: false },
    { icon: 'warning',      title: 'Alerta de sistema',        desc: 'Stock de medicamentos crítico — revisar inventario',  time: 'Hace 2 horas', type: 'red',    read: false },
    { icon: 'check_circle', title: 'Tratamiento completado',   desc: 'Rocky - Perro · Tratamiento antibiótico finalizado', time: 'Hace 3 horas', type: 'green',  read: true  },
    { icon: 'chat',         title: 'Nuevo mensaje de cliente', desc: 'María González pregunta sobre la dieta de Bella',    time: 'Ayer',         type: 'blue',   read: true  },
    { icon: 'event_busy',   title: 'Cita cancelada',           desc: 'Toby - Perro · Propietario canceló cita del 8/03',  time: 'Ayer',         type: 'gray',   read: true  },
  ];

  unreadCount(): number { return this.notifications.filter(n => !n.read).length; }
  markAllRead() { this.notifications.forEach(n => n.read = true); }
  removeReminder(id: string) { this.reminderStore.remove(id); }
}
