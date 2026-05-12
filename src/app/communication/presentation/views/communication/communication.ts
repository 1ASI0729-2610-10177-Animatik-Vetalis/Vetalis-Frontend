import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-communication',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './communication.html',
  styleUrl: './communication.css'
})
export class Communication {
  notifications = [
    { icon: 'event', title: 'Nueva cita programada', desc: 'Max - Perro · Mañana 09:00 AM', time: 'Hace 5 min', type: 'blue', read: false },
    { icon: 'vaccines', title: 'Vacuna pendiente', desc: 'Luna - Gato · Vacuna trivalente vence en 3 días', time: 'Hace 1 hora', type: 'yellow', read: false },
    { icon: 'warning', title: 'Alerta del sistema', desc: 'Stock de medicamentos crítico — revisar inventario', time: 'Hace 2 horas', type: 'red', read: false },
    { icon: 'check_circle', title: 'Tratamiento completado', desc: 'Rocky - Perro · Tratamiento antibiótico finalizado', time: 'Hace 3 horas', type: 'green', read: true },
    { icon: 'chat', title: 'Nuevo mensaje de cliente', desc: 'María González pregunta sobre la dieta de Bella', time: 'Ayer', type: 'blue', read: true },
    { icon: 'event_busy', title: 'Cita cancelada', desc: 'Toby - Perro · Propietario canceló cita del 8/03', time: 'Ayer', type: 'gray', read: true },
  ];

  reminders = [
    { icon: 'medical_services', title: 'Próxima consulta', desc: 'Simba · 10:00 AM · Consulta de rutina', color: '#3B82F6', bg: '#DBEAFE' },
    { icon: 'medication', title: 'Medicación en curso', desc: 'Luna · Amoxicilina 250mg · 5 días restantes', color: '#F59E0B', bg: '#FEF9C3' },
    { icon: 'vaccines', title: 'Vacunación próxima', desc: 'Rocky · Vacuna antirrábica · En 7 días', color: '#EF4444', bg: '#FEE2E2' },
    { icon: 'monitor_heart', title: 'Control de tratamiento', desc: 'Max · Revisión post-cirugía · Mañana 14:00', color: '#8B5CF6', bg: '#EDE9FE' },
    { icon: 'science', title: 'Resultados de laboratorio', desc: 'Michi · Análisis de sangre · Listos para revisar', color: '#06B6D4', bg: '#E0F2FE' },
  ];

  unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  markAllRead() {
    this.notifications.forEach(n => n.read = true);
  }
}
