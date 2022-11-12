import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateUsersDto } from 'src/users/dtos/CreateUsersDto.dto';
import { UsersService } from 'src/users/services/users/users.service';


@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Get()
  getUsers() {
    return this.usersService.findUsers();
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUsersDto) {
    console.log(userData);
    return this.usersService.createUsers(userData);
  }

  // @Get(':id') //get users by id
  // getUsersById(@Param('id', ParseIntPipe) id: number) {
  //   console.log(id);
  //   const user = this.usersService.fetchUsersById(id);
  //   if (!user)
  //     throw new HttpException('User not Found', HttpStatus.BAD_REQUEST);
  //   return user;
  // }
}
