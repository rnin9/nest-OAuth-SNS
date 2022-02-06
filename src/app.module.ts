import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleOauthModule } from './auth/google-oauth/google-oauth.module';
import { JwtAuthModule } from './auth/jwt-auth/jwt-auth.module';

@Module({
  imports: [GoogleOauthModule, JwtAuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
