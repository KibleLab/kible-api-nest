import { Test, TestingModule } from '@nestjs/testing';
import { MenuMgntController } from './menu-mgnt.controller';

describe('MenuMgntController', () => {
  let controller: MenuMgntController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuMgntController],
    }).compile();

    controller = module.get<MenuMgntController>(MenuMgntController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
