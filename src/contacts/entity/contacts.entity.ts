import { v4 as uuid } from 'uuid';

export class contactsEntity {
  id = uuid();
  usuarioUuid = uuid();
  nombre: string;
  apellidos: string;
  teléfono: number;
  correo: string;
}
