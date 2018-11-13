import { Test, TestingModule } from '@nestjs/testing';
import { PenguinController } from './penguin.controller';

describe('Penguin Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [PenguinController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: PenguinController = module.get<PenguinController>(PenguinController);
    expect(controller).toBeDefined();
  });
});
