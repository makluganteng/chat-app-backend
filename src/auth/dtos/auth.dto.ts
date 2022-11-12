import { IsNotEmpty } from 'class-validator';

export class AuthUsersDto {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;
}