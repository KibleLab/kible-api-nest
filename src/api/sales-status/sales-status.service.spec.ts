import { Test, TestingModule } from '@nestjs/testing';
import { SalesStatusService } from './sales-status.service';

describe('SalesStatusService', () => {
  let service: SalesStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesStatusService],
    }).compile();

    service = module.get<SalesStatusService>(SalesStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
