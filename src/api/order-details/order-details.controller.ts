import { Controller } from '@nestjs/common';

@Controller({ host: 'api.localhost', path: ':mrc-id/order-details' })
export class OrderDetailsController {}
