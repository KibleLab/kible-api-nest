import { Controller } from '@nestjs/common';

@Controller({ host: 'api.localhost', path: ':mrc-id/menu-mgnt' })
export class MenuMgntController {}
