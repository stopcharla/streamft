import { IsNotEmpty } from "class-validator";

export class CreateUserDTO {
  @IsNotEmpty({ message: 'username cannot be empty' })
  username: string;

  @IsNotEmpty({ message: 'name cannot be empty' })
  name: string;
}