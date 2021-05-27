import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { User } from '../user/entity/user.entity';
import { UnauthorizedException } from '@nestjs/common';
import { config } from 'dotenv';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt-strategy') {
  constructor(
    @InjectRepository(User) protected repository: Repository<User>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRETE,
    });
  }

  async validate(payload: any) {
    const user: User = await this.repository.findOne(payload.id);
    if (!user) {
      throw new UnauthorizedException();
    }
    return payload;
  }
}