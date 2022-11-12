import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Vincent.com1310',
      database: 'bankingsystem',
      entities: [User],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule { }
