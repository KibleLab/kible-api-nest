import { Module } from '@nestjs/common';
import { MenuMgntController } from './menu-mgnt.controller';
import { MenuMgntService } from './menu-mgnt.service';

@Module({
  controllers: [MenuMgntController],
  providers: [MenuMgntService],
})
export class MenuMgntModule {}
