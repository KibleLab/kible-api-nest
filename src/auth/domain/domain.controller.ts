import { Controller } from '@nestjs/common';

@Controller({ host: 'auth.localhost', path: 'domain' })
export class DomainController {}
