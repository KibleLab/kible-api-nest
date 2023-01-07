import { Controller } from '@nestjs/common';

@Controller({ host: 'api.localhost', path: ':mrc-id/sales-status' })
export class SalesStatusController {}
