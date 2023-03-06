import { Injectable, NotFoundException } from '@nestjs/common';
import { contactsEntity } from './entity/contacts.entity';
import { createContactDto } from './dto/createContact.dto';
import { updateContactDto } from './dto/updateContact.dto';

@Injectable()
export class ContactsService {
  private readonly contacts: contactsEntity[] = [];
  addContact(nuevoContacto: createContactDto): contactsEntity {
    const newContact = new contactsEntity();
    newContact.nombre = nuevoContacto.nombre;
    newContact.apellidos = nuevoContacto.apellidos;
    newContact.correo = nuevoContacto.correo;
    newContact.teléfono = nuevoContacto.teléfono;
    this.contacts.push(newContact);
    return newContact;
  }
  getContacts(): contactsEntity[] {
    return this.contacts;
  }
  findOneById(id: string): contactsEntity {
    const currentEntity = this.contacts.find((item) => item.id === id);
    if (currentEntity) return currentEntity;
    else throw new NotFoundException('Elemento no encontrado');
  }
  update(id: string, entity: updateContactDto): contactsEntity {
    const indexCurrentEntity = this.contacts.findIndex(
      (item) => item.id === id,
    );
    if (indexCurrentEntity >= 0)
      this.contacts[indexCurrentEntity] = {
        ...this.contacts[indexCurrentEntity],
        ...entity,
        id,
      } as contactsEntity;
    else throw new NotFoundException();
    return this.contacts[indexCurrentEntity];
  }
  changeName(id: string, name: string): void {
    const cambiarNombre = this.findOneById(id);
    cambiarNombre.nombre = name;
    this.update(id, cambiarNombre);
  }
  deleteContact(id: string): void {
    this.delete(id);
  }
  delete(id: string): void {
    this.contacts.splice(
      this.contacts.findIndex((item) => item.id === id),
      1,
    );
  }
}
