import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactsService {
  getHelloContacts(): string {
    return 'Hola desde el servicio de Contacts';
  }
}
