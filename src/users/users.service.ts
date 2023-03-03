import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getHelloUsers() {
    return 'Hola desde el servicio de Users';
  }
}
