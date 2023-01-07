import { Module } from '@nestjs/common';
import { SalesStatusController } from './sales-status.controller';
import { SalesStatusService } from './sales-status.service';

@Module({
  controllers: [SalesStatusController],
  providers: [SalesStatusService],
})
export class SalesStatusModule {}
