import { Module } from '@nestjs/common';
import { SignInModule } from './sign-in/sign-in.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [SignInModule, SignUpModule, DomainModule],
})
export class AuthModule {}
