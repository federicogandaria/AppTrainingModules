import { Injectable, NotFoundException } from '@nestjs/common';
import { createTaskDto } from './dto/createTask.dto';
import { taskEntity } from './entity/tasks.entity';
import { updateTaskDto } from './dto/updateTask.dto';

@Injectable()
export class TasksService {
  private readonly tasks: taskEntity[] = [];
  addTask(nuevaTarea: createTaskDto): taskEntity {
    const newTask = new taskEntity();
    newTask.tarea = nuevaTarea.tarea;
    this.tasks.push(newTask);
    return newTask;
  }
  getTasks(): taskEntity[] {
    return this.tasks;
  }
  findOneById(id: string): taskEntity {
    const currentEntity = this.tasks.find((item) => item.id === id);
    if (currentEntity) return currentEntity;
    else throw new NotFoundException('Elemento no encontrado');
  }
  update(id: string, entity: updateTaskDto): taskEntity {
    const indexCurrentEntity = this.tasks.findIndex((item) => item.id === id);
    if (indexCurrentEntity >= 0)
      this.tasks[indexCurrentEntity] = {
        ...this.tasks[indexCurrentEntity],
        ...entity,
        id,
      } as taskEntity;
    else throw new NotFoundException();
    return this.tasks[indexCurrentEntity];
  }
  changeTask(id: string, task: string): void {
    const cambiarTarea = this.findOneById(id);
    cambiarTarea.tarea = task;
    this.update(id, cambiarTarea);
  }
  deleteTask(id: string): void {
    this.delete(id);
  }
  delete(id: string): void {
    this.tasks.splice(
      this.tasks.findIndex((item) => item.id === id),
      1,
    );
  }
}
