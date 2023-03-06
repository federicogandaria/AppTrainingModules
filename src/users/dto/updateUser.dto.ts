import { IsUUID, IsString, IsNotEmpty, IsEmail } from "class-validator";

export class updateUserDto {
  id: string;

  @IsString({ message: ' This field should be a string' })
  @IsNotEmpty({ message: ' This field should not be empty' })
  nombre: string;

  @IsString({ message: ' This field should be a string' })
  @IsNotEmpty({ message: ' This field should not be empty' })
  apellido: string;

  @IsString({ message: ' This field should be a string' })
  @IsNotEmpty({ message: ' This field should not be empty' })
  @IsEmail()
  email: string;
}
