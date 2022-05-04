import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, PrismaService],
      imports: [],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should create a user', async () => {
    const resolvedMock = {
      id: 1,
      name: 'Bruno Gomes',
      email: 'bruno.gomes@qesh.ai',
      password: '123456',
    };
    jest.spyOn(service, 'create').mockResolvedValue(resolvedMock);

    const response = await controller.create(resolvedMock);

    expect(response).toBeDefined();
    expect(response).toBe(resolvedMock);
  });

  it('should find all users', async () => {
    const resolvedMock = [
      {
        id: 1,
        name: 'Bruno Gomes',
        email: 'bruno.gomes@qesh.ai',
        password: '123456',
      },
    ];
    jest.spyOn(service, 'findAll').mockResolvedValue(resolvedMock);

    const response = await controller.findAll();

    expect(response).toBeDefined();
    expect(response).toEqual(resolvedMock);
  });

  it('should find one user', async () => {
    const resolvedMock = {
      id: 1,
      name: 'Bruno Gomes',
      email: 'bruno.gomes@qesh.ai',
      password: '123456',
    };
    jest.spyOn(service, 'findOne').mockResolvedValue(resolvedMock);

    const mockId = 1;
    const response = await controller.findOne(mockId);

    expect(response).toBeDefined();
    expect(response).toBe(resolvedMock);
  });
});
