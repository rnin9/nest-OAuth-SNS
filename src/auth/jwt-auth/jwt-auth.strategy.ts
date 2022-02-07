import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import * as config from 'config';

const jwtConfig = config.get('jwt');

@Injectable()
export class JwtAuthStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConfig.get('jwt_secret'),
    });
  }

  async validate(payload: any) {
    return {
      provider: payload.provider,
      id: payload.id,
      username: payload.username,
      name: payload.name,
    };
  }
}
