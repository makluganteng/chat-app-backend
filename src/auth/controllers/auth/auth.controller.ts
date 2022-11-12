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
import { AuthUsersDto } from 'src/auth/dtos/auth.dto';
import { AuthService } from 'src/auth/services/auth/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post()
    authenticate(@Body() userData: AuthUsersDto) {
        return this.authService.authenticateUser(userData);
    }
}
