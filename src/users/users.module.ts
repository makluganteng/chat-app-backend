import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { UsersController } from './controllers/users/users.controller';
import { User } from './entities/users.entity';
import { MiddlewaresMiddleware } from './middlewares/middlewares.middleware';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MiddlewaresMiddleware).forRoutes({
      path: 'users',
      method: RequestMethod.GET,
    });
  }
}
