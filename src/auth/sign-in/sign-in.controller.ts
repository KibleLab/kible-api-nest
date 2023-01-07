import { Controller, Get } from '@nestjs/common';

@Controller({ host: 'auth.localhost', path: 'sign-in' })
export class SignInController {
  @Get()
  getSignIn(): string {
    return 'Sign-In';
  }
}
