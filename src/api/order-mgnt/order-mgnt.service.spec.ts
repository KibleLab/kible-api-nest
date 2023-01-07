import { Test, TestingModule } from '@nestjs/testing';
import { OrderMgntService } from './order-mgnt.service';

describe('OrderMgntService', () => {
  let service: OrderMgntService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderMgntService],
    }).compile();

    service = module.get<OrderMgntService>(OrderMgntService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
