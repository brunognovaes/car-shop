import { Inject, Injectable } from '@nestjs/common';
import {
  ICreateUserService,
  IUser,
  IUsersRepository,
  IUsersService,
} from './users.structure';

@Injectable()
export class UsersService implements IUsersService {
  constructor(@Inject('USERS_REPOSITORY') private repo: IUsersRepository) {}

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
