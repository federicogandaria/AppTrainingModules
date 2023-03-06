import { IsString, IsNotEmpty, IsEmail, MaxLength, MinLength, IsOptional } from "class-validator";

export class createContactDto {
  @IsString({ message: ' This field should be a string' })
  id: string;

  @IsString({ message: ' This field should be a string' })
  usuarioUuid: string;

  @MaxLength(20, { message: 'Name should be at most 20 characters' })
  @MinLength(2, { message: 'Name should be at least 2 characters' })
  @IsString({ message: ' This field should be a string' })
  @IsNotEmpty({ message: ' This field should not be empty' })
  nombre: string;

  @MaxLength(20, { message: 'Name should be at most 20 characters' })
  @MinLength(2, { message: 'Name should be at least 2 characters' })
  @IsString({ message: ' This field should be a string' })
  @IsNotEmpty({ message: ' This field should not be empty' })
  apellidos: string;

  teléfono: number;

  @IsEmail({}, { message: 'Invalid email format' })
  correo: string;
}
