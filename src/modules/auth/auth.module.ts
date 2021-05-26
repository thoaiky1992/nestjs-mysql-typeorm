import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt-strategy';
import { AuthService } from './auth.service';
import { config } from 'dotenv';
import { AuthController } from './auth.controller';
config();

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRETE,
      signOptions: { expiresIn: '30 days' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, JwtStrategy, JwtModule, PassportModule],
  controllers: [AuthController]
})
export class AuthModule {}
