import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from 'src/users/dtos/CreateUsersDto.dto';

@Injectable()
export class UsersService {
  private fakeUsers = [{ username: 'vincent', password: 'vincent' }];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUsers(userData: CreateUsersDto) {
    return this.fakeUsers.push(userData);
  }

  fetchUsersById(id: number) {
    return { id, username: 'vincent', password: 'tai' };
  }
}
