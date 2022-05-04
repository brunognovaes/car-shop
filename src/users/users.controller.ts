import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { UsersService } from './users.service';
import { IUser } from './users.structure';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() body: CreateUserDto): Promise<IUser> {
    const user = await this.usersService.create(body);
    return user;
  }

  @Get()
  async findAll(): Promise<IUser[]> {
    const users = await this.usersService.findAll();
    return users;
  }

  @Get('/:id')
  async findOne(@Param('id') id: number): Promise<IUser> {
    const users = await this.usersService.findOne(id);
    return users;
  }
}
