import { Test, TestingModule } from '@nestjs/testing';
import { UsersMockRepository } from './mocks/users.mock.repository';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: 'USERS_REPOSITORY',
          useClass: UsersMockRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should create an user', async () => {
    const mockUser = {
      name: 'Bruno Gomes',
      email: 'bruno.gomes@qesh.ai',
      password: '123456',
    };

    const response = await service.create(mockUser);

    expect(response).toBeDefined();
    expect(response).toHaveProperty('id');
    expect(response).toHaveProperty('name', mockUser.name);
    expect(response).toHaveProperty('email', mockUser.email);
    expect(response).toHaveProperty('password', mockUser.password);
  });

  it('should create an user and find', async () => {
    const mockUser = {
      name: 'Bruno Gomes',
      email: 'bruno.gomes@qesh.ai',
      password: '123456',
    };

    const createdUser = await service.create(mockUser);
    const response = await service.findOne(createdUser.id);

    expect(response).toBeDefined();
    expect(response).toHaveProperty('id', createdUser.id);
    expect(response).toHaveProperty('name', createdUser.name);
    expect(response).toHaveProperty('email', createdUser.email);
    expect(response).toHaveProperty('password', createdUser.password);
  });

  it('should find all users', async () => {
    const mockUsers = [
      {
        name: 'Bruno Gomes',
        email: 'bruno.gomes@qesh.ai',
        password: '123456',
      },
      {
        name: 'Breno Gomes',
        email: 'breno.gomes@qesh.ai',
        password: '123456',
      },
    ];

    const createdUsers = await Promise.all(
      mockUsers.map(async (user) => await service.create(user)),
    );

    const response = await service.findAll();

    expect(response).toBeDefined();
    expect(response).toHaveLength(2);
    expect(response).toEqual(createdUsers);
  });
});
