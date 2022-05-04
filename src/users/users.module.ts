import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService,
    {
      provide: 'USERS_REPOSITORY',
      useClass: UsersRepository,
    },
  ],
})
export class UsersModule {}
