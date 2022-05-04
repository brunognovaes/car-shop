import { Injectable } from '@nestjs/common';
import { IUser, IUsersRepository } from '../users.structure';

@Injectable()
export class UsersMockRepository implements IUsersRepository {
  private users: IUser[] = [];

  async create(data: any): Promise<IUser> {
    const id = this.users.length + 1;
    const user = { ...data, id };
    this.users.push(user);
    return user;
  }

  async findAll(): Promise<IUser[]> {
    return this.users;
  }

  async findOne(id: number): Promise<IUser> {
    const user = this.users.find((user) => user.id === id);
    return user;
  }
}
