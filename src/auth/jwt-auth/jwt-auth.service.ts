import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthService {
  constructor(private jwtService: JwtService) {}

  login(user) {
    const payload = {
      provider: user.provider,
      id: user.providerId,
      username: user.username,
      name: user.name,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
