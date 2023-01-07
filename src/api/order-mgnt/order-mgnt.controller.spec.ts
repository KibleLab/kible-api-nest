import { Test, TestingModule } from '@nestjs/testing';
import { OrderMgntController } from './order-mgnt.controller';

describe('OrderMgntController', () => {
  let controller: OrderMgntController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderMgntController],
    }).compile();

    controller = module.get<OrderMgntController>(OrderMgntController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
