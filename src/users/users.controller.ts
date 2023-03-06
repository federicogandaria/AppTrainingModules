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
import { IUsers } from './interface/users.interface';
import { UsersService } from './users.service';
import { usersEntity } from './entity/users.entity';
import { createUserDto } from './dto/createUser.dto';
import { updateUserDto } from './dto/updateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('createUser')
  createUser(@Body() createUser: createUserDto): usersEntity {
    return this.usersService.addUser(createUser);
  }

  @Get()
  getUsers(): IUsers[] {
    return this.usersService.getUsers();
  }
  @Get(':id')
  getUserInfo(@Param('id', ParseUUIDPipe) userId: string): usersEntity {
    return this.usersService.findOneById(userId);
  }
  @Put('/:id')
  updateUser(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() usuario: updateUserDto,
  ): usersEntity {
    return this.usersService.update(id, usuario);
  }
  @Patch('updateName/:id')
  changeName(
    @Param('id', ParseUUIDPipe) id: string,
    @Query('Name') name: string,
  ): void {
    console.log(name);
    this.usersService.changeName(id, name);
  }
  @Delete('delete/:id')
  deleteUser(@Param('id') id: string): boolean {
    this.usersService.deleteUser(id);
    return true;
  }
}
