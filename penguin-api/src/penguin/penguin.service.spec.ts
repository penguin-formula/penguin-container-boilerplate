import { Test, TestingModule } from '@nestjs/testing';
import { PenguinService } from './penguin.service';

describe('PenguinService', () => {
  let service: PenguinService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PenguinService],
    }).compile();
    service = module.get<PenguinService>(PenguinService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
