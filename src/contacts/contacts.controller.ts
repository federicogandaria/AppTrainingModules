import { Controller, Get } from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}
  @Get()
  getContacts(): string {
    return this.contactsService.getHelloContacts();
  }
}
