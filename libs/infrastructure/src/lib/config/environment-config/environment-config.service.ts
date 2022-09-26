import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from '@auth/domain';

@Injectable()
export class EnvironmentConfigService implements DatabaseConfig {
  constructor(private configService: ConfigService) {}

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
}
