import { Test, TestingModule } from '@nestjs/testing';
import { SalesStatusController } from './sales-status.controller';

describe('SalesStatusController', () => {
  let controller: SalesStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalesStatusController],
    }).compile();

    controller = module.get<SalesStatusController>(SalesStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
