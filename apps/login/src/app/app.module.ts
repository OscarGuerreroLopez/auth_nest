import { Module } from '@nestjs/common';
// import { JwtModule as Jwt } from '@nestjs/jwt';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MetaController, MetaService } from '@auth/middleware';
import {
  EnvironmentConfigModule,
  EnvironmentConfigService,
  // UsecasesProxyModule,
  // JwtModule,
  // JwtTokenService,
  // LoggerService,
  // LoggerModule,
  // BcryptModule,
  // RepositoriesModule,
  // ExceptionsModule,
  // DatabaseUserRepository,
  // BcryptService,
  // TypeOrmConfigModule,
  // User,
} from '@auth/infrastructure';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // TypeOrmConfigModule,
    // TypeOrmModule.forFeature([User]),
    EnvironmentConfigModule,
    // JwtModule,
    // LoggerModule,
    // BcryptModule,
    // RepositoriesModule,
    // ExceptionsModule,
    // UsecasesProxyModule.register(),
    // Jwt.register({
    //   secret: process.env.JWT_SECRET,
    //   signOptions: { expiresIn: '24h' },
    // }),
  ],
  controllers: [AppController, MetaController],
  providers: [
    AppService,
    MetaService,
    EnvironmentConfigService,
    // JwtTokenService,
    // LoggerService,
    // DatabaseUserRepository,
    // BcryptService,
  ],
})
export class AppModule {}
