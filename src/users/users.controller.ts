import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './users.dto';

@Controller('users')
export class UsersController {
  @Post()
  createUser(@Body() body: CreateUserDto): CreateUserDto {
    return body;
  }

  @Get()
  findAll() {
    return [];
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return id;
  }
}
