import { v4 as uuid } from 'uuid';

export class taskEntity {
  id = uuid();
  usuarioUuid = uuid();
  tarea: string;
}
