import { Module } from '@nestjs/common';
import { OrderMgntModule } from './order-mgnt/order-mgnt.module';
import { MenuMgntModule } from './menu-mgnt/menu-mgnt.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { SalesStatusModule } from './sales-status/sales-status.module';

@Module({
  imports: [
    OrderMgntModule,
    MenuMgntModule,
    OrderDetailsModule,
    SalesStatusModule,
  ],
})
export class ApiModule {}
