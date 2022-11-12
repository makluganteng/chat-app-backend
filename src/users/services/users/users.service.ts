import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async createUsers(createUsersDetails: CreateUsersDto) {
    let findExistingUsername = await this.findOneByUsername(
      createUsersDetails.username,
    );
    if (findExistingUsername) {
      throw new HttpException(
        'Duplicate Username in record',
        HttpStatus.CONFLICT,
      );
    }
    const newUser = this.userRepository.create({
      ...createUsersDetails,
      createdAt: new Date(),
    });
    return this.userRepository.save(newUser);
  }

  async findOneByUsername(username: string): Promise<User> {
    return this.userRepository.findOneBy({ username: username });
  }

  async findOneByDetails(username: string, password: string): Promise<User> {
    return this.userRepository.findOneBy({
      username: username,
      password: password
    })
  }
}