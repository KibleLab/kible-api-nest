import { Module } from '@nestjs/common';
import { OrderMgntController } from './order-mgnt.controller';
import { OrderMgntService } from './order-mgnt.service';

@Module({
  controllers: [OrderMgntController],
  providers: [OrderMgntService],
})
export class OrderMgntModule {}
