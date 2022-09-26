import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig, JWTConfig } from '@auth/domain';

@Injectable()
export class EnvironmentConfigService implements DatabaseConfig, JWTConfig {
  constructor(private configService: ConfigService) {}

  getJwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET') || '';
  }

  getJwtExpirationTime(): string {
    return this.configService.get<string>('JWT_EXPIRATION_TIME') || '';
  }

  getJwtRefreshSecret(): string {
    return this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET') || '';
  }

  getJwtRefreshExpirationTime(): string {
    return (
      this.configService.get<string>('JWT_REFRESH_TOKEN_EXPIRATION_TIME') || ''
    );
  }

  getDatabaseHost(): string {
    return this.configService.get<string>('DATABASE_HOST') || '';
  }

  getDatabasePort(): number {
    return this.configService.get<number>('DATABASE_PORT') || 0;
  }

  getDatabaseUser(): string {
    return this.configService.get<string>('DATABASE_USER') || '';
  }

  getDatabasePassword(): string {
    return this.configService.get<string>('DATABASE_PASSWORD') || '';
  }

  getDatabaseName(): string {
    return this.configService.get<string>('DATABASE_NAME') || '';
  }

  getDatabaseSchema(): string {
    return this.configService.get<string>('DATABASE_SCHEMA') || '';
  }

  getNodeEnv(): string {
    return this.configService.get<string>('NODE_ENV') || '';
  }
}
