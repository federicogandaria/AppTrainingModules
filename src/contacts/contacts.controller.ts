import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { contactsEntity } from './entity/contacts.entity';
import { createContactDto } from './dto/createContact.dto';
import { updateContactDto } from './dto/updateContact.dto';
import { IContactsInterface } from './interface/contacts.interface';

@Controller('contact')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post('createContact')
  createContact(@Body() createContact: createContactDto): contactsEntity {
    return this.contactsService.addContact(createContact);
  }

  @Get()
  getContacts(): IContactsInterface[] {
    return this.contactsService.getContacts();
  }
  @Get(':id')
  getContactInfo(
    @Param('id', ParseUUIDPipe) contactId: string,
  ): contactsEntity {
    return this.contactsService.findOneById(contactId);
  }
  @Put('/:id')
  updateContact(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() usuario: updateContactDto,
  ): contactsEntity {
    return this.contactsService.update(id, usuario);
  }
  @Patch('updateName/:id')
  changeName(
    @Param('id', ParseUUIDPipe) id: string,
    @Query('Name') name: string,
  ): void {
    this.contactsService.changeName(id, name);
  }
  @Delete('delete/:id')
  deleteContact(@Param('id') id: string): boolean {
    this.contactsService.deleteContact(id);
    return true;
  }
}
