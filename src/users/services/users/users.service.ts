import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsersDto } from 'src/users/dtos/CreateUsersDto.dto';
import { User } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) { }

  findUsers() { }

  createUsers(createUsersDetails: CreateUsersDto) {
    const newUser = this.userRepository.create({
      ...createUsersDetails,
      createdAt: new Date(),
    });
    return this.userRepository.save(newUser);
  }
}
