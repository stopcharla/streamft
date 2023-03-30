import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class UserSearchDTO {
  @IsNotEmpty({ message: 'username cannot be empty' })
  word: string;

  @IsOptional({ message: 'POS be empty' })
  pos: string;

  @IsBoolean({ message: 'isSuccessful be empty' })
  isSuccessful: boolean;

  @IsNotEmpty({ message: 'POS be empty' })
  returnType: string;
}
