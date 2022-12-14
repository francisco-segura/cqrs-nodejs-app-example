import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from '../services/users.service';

describe('Users Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();
  });
  it('should be defined', () => {
    const controller: UsersController = module.get<UsersController>(UsersController);
    expect(controller).toBeDefined();
  });
});
