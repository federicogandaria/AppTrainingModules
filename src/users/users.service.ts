import { NotFoundException } from '@nestjs/common';
import { createUserDto } from './dto/createUser.dto';
import { usersEntity } from './entity/users.entity';
import { updateUserDto } from './dto/updateUser.dto';

export class UsersService {
  private readonly users: usersEntity[] = [];

  addUser(nuevoUsuario: createUserDto): usersEntity {
    const newUsuario = new usersEntity();
    newUsuario.nombre = nuevoUsuario.nombre;
    newUsuario.apellido = nuevoUsuario.apellido;
    newUsuario.email = nuevoUsuario.email;
    this.users.push(newUsuario);
    return newUsuario;
  }

  getUsers(): usersEntity[] {
    return this.users;
  }

  findOneById(id: string): usersEntity {
    const currentEntity = this.users.find((item) => item.id === id);
    if (currentEntity) return currentEntity;
    else throw new NotFoundException('Elemento no encontrado');
  }

  update(id: string, entity: updateUserDto): usersEntity {
    const indexCurrentEntity = this.users.findIndex((item) => item.id === id);
    if (indexCurrentEntity >= 0)
      this.users[indexCurrentEntity] = {
        ...this.users[indexCurrentEntity],
        ...entity,
        id,
      } as usersEntity;
    else throw new NotFoundException();
    return this.users[indexCurrentEntity];
  }
  changeName(id: string, name: string): void {
    const cambiarNombre = this.findOneById(id);
    console.log(cambiarNombre);
    cambiarNombre.nombre = name;
    console.log(name);
    this.update(id, cambiarNombre);
  }
  deleteUser(id: string): void {
    this.delete(id);
  }
  delete(id: string): void {
    this.users.splice(
      this.users.findIndex((item) => item.id === id),
      1,
    );
  }
}
