export interface User {
  id: string;
  nombre: string;
  apellidos: string;
  email: string;
  roles: string[];
  veterinarioId?: string;
  especialidad?: string;
  avatarColor?: string;
}

export interface Credentials {
  email: string;
  password: string;
}
