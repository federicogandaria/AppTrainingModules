import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getHelloTask(): string {
    return 'Hola desde el servicio de Tasks';
  }
}
