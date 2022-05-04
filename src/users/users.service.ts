import { Injectable } from '@nestjs/common';
import { ICreateUserService, IUser, IUsersService } from './users.structure';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService implements IUsersService {
  constructor(private repo: UsersRepository) {}

  async create(data: ICreateUserService): Promise<IUser> {
    return await this.repo.create(data);
  }

  async findAll(): Promise<IUser[]> {
    return await this.repo.findAll();
  }

  async findOne(id: number): Promise<IUser> {
    return await this.repo.findOne(id);
  }
}
