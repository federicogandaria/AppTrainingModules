import { IsString, IsNotEmpty } from "class-validator";

export class createUserDto {
  @IsString({ message: ' This field should be a string' })
  @IsNotEmpty({ message: ' This field should not be empty' })
  id: string;

  @IsString({ message: ' This field should be a string' })
  @IsNotEmpty({ message: ' This field should not be empty' })
  nombre: string;

  @IsString({ message: ' This field should be a string' })
  @IsNotEmpty({ message: ' This field should not be empty' })
  apellido: string;

  @IsString({ message: ' This field should be a string' })
  @IsNotEmpty({ message: ' This field should not be empty' })
  email: string;
}
