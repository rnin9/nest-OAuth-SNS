import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthService } from './jwt-auth.service';
import { JwtAuthStrategy } from './jwt-auth.strategy';
import * as config from 'config';

const jwtConfig = config.get('jwt');
@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async () => {
        return {
          secret: jwtConfig.get('jwt_secret'),
          signOptions: {
            expiresIn: jwtConfig.get('jwt_expires_in'),
          },
        };
      },
    }),
  ],
  providers: [JwtAuthStrategy, JwtAuthService],
  exports: [JwtAuthService],
})
export class JwtAuthModule {}
