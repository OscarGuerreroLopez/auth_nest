import { Injectable } from '@nestjs/common';
import { JwtService as jwtTokenService } from '@nestjs/jwt';
import { IJwtService, IJwtServicePayload } from '@auth/domain';

@Injectable()
export class JwtService implements IJwtService {
  constructor(private readonly jwtService: jwtTokenService) {}

  async checkToken(token: string): Promise<any> {
    const decode = await this.jwtService.verifyAsync(token);
    return decode;
  }

  createToken(
    payload: IJwtServicePayload,
    secret: string,
    expiresIn: string
  ): string {
    return this.jwtService.sign(payload, {
      secret: secret,
      expiresIn: expiresIn,
    });
  }
}
