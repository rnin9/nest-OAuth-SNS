import {
  Controller,
  Get,
  HttpException,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../jwt-auth/jwt-auth.guard';
import { JwtAuthService } from '../jwt-auth/jwt-auth.service';
import { GoogleOauthGuard } from './google-oauth.guard';

@Controller('api/login/google-oauth')
export class GoogleOauthController {
  constructor(
    private jwtAuthService: JwtAuthService, // private userService: UserService,
  ) {}
  @Get()
  @UseGuards(GoogleOauthGuard)
  async googleAuth() {
    throw new HttpException('unauthorized', 401);
  }

  @Get('redirect')
  @UseGuards(GoogleOauthGuard)
  async googleAuthRedirect(@Req() req, @Res() res) {
    // const user = this.userService.findUser(req.user.provider, req.user.id);
    const user = true;
    if (user) {
      const access_token = this.jwtAuthService.login(req.user);
      return res.status(200).json(access_token);
      //give access token with jwt login Success
    } else {
      return res.status(205).json(req.user);
      //register response
    }
    // id를 db에서 체크 후, 있다면 login과 jwt발급, 없다면 회원가입
  }

  //jwt token validating
  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Req() req) {
    return req.user;
  }
}
