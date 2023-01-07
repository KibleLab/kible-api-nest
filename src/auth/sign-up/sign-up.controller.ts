import { Controller } from '@nestjs/common';

@Controller({ host: 'auth.localhost', path: 'sign-up' })
export class SignUpController {}
