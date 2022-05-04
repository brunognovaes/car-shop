import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ICreateUserService, IUser, IUsersRepository } from './users.structure';

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: ICreateUserService): Promise<IUser> {
    return await this.prisma.user.create({ data });
  }

  async findAll(): Promise<IUser[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<IUser> {
    return await this.prisma.user.findUnique({ where: { id } });
  }
}
