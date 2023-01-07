import { Test, TestingModule } from '@nestjs/testing';
import { MenuMgntService } from './menu-mgnt.service';

describe('MenuMgntService', () => {
  let service: MenuMgntService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuMgntService],
    }).compile();

    service = module.get<MenuMgntService>(MenuMgntService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
