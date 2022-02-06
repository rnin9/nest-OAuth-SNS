import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleOauthModule } from './auth/google-oauth/google-oauth.module';

@Module({
  imports: [GoogleOauthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
