import { IsNotEmpty } from 'class-validator';

export class CreateUsersDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  age: number;
}
