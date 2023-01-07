import { Controller } from '@nestjs/common';

@Controller({ host: 'api.localhost', path: ':mrc-id/order-mgnt' })
export class OrderMgntController {}
