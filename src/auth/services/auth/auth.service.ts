import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthUsersDto } from 'src/auth/dtos/auth.dto';
import { User } from 'src/users/entities/users.entity';
import { UsersService } from 'src/users/services/users/users.service';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private userServices: UsersService,
    ) { }

    async authenticateUser(userCredentials: AuthUsersDto) {
        let findUserDetails = await this.userServices.findOneByDetails(
            userCredentials.username,
            userCredentials.password,
        );

        if (!findUserDetails) {
            throw new UnauthorizedException();
        }
        return {
            username: findUserDetails.username,
            password: findUserDetails.password,
        };
    }
}
