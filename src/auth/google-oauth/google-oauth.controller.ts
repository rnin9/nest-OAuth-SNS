import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleOauthGuard } from './google-oauth.guard';

@Controller('google-oauth')
export class GoogleOauthController {
  @Get()
  @UseGuards(GoogleOauthGuard)
  async googleAuth(@Req() req) {}

  @Get('redirect')
  @UseGuards(GoogleOauthGuard)
  async googleAuthRedirect(@Req() req) {
    return req.user;
  }
}
