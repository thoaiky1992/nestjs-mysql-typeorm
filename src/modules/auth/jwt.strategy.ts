import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { User } from '../user/entity/user.entity';
import { UserService } from '../user/services/user.service';
import { UnauthorizedException } from '@nestjs/common';
import { config } from 'dotenv';
import { Request } from 'express';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';
config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt-strategy') {
  constructor(
    private moduleRef: ModuleRef
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRETE,
      passReqToCallback: true
    });
  }

  async validate(request: Request, payload: any) {

    const contextId = ContextIdFactory.getByRequest(request);
    
    await this.moduleRef.resolve(UserService, contextId , { strict: false });

    // const user: User = await this.userService.findOne(payload.id);
    // if (!user) {
    //   throw new UnauthorizedException();
    // }
    return payload;
  }
}