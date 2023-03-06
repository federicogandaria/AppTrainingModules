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
import { TasksService } from './tasks.service';
import { createTaskDto } from './dto/createTask.dto';
import { taskEntity } from './entity/tasks.entity';
import { ITasks } from './interface/tasks.interface';
import { updateTaskDto } from './dto/updateTask.dto';

@Controller('task')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Post('createTask')
  createTask(@Body() createTask: createTaskDto): taskEntity {
    return this.taskService.addTask(createTask);
  }

  @Get()
  getTasks(): ITasks[] {
    return this.taskService.getTasks();
  }
  @Get(':id')
  getTaskInfo(@Param('id', ParseUUIDPipe) taskId: string): taskEntity {
    return this.taskService.findOneById(taskId);
  }
  @Put('/:id')
  updateTask(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() task: updateTaskDto,
  ): taskEntity {
    return this.taskService.update(id, task);
  }
  @Patch('updateTask/:id')
  changeTask(
    @Param('id', ParseUUIDPipe) id: string,
    @Query('Tarea') tarea: string,
  ): void {
    this.taskService.changeTask(id, tarea);
  }
  @Delete('delete/:id')
  deleteTask(@Param('id') id: string): boolean {
    this.taskService.deleteTask(id);
    return true;
  }
}
