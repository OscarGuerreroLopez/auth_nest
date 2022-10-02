import { DynamicModule, Module } from '@nestjs/common';

import {
  IsAuthenticatedUseCases,
  LoginUseCases,
  LogoutUseCases,
  GetUserDetailUseCases,
  InsertUserDetailUseCases,
} from '@auth/usecases';

import { ExceptionsModule } from '../exceptions/exceptions.module';
import { LoggerModule } from '../logger/logger.module';
import { LoggerService } from '../logger/logger.service';

import { BcryptModule } from '../services/bcrypt/bcrypt.module';
import { BcryptService } from '../services/bcrypt/bcrypt.service';
import { JwtModule } from '../services/jwt/jwt.module';
import { JwtTokenService } from '../services/jwt/jwt.service';
import { RepositoriesModule } from '../repositories/repositories.module';

import { DatabaseUserRepository } from '../repositories/user.repository';
import { DatabaseUserDetailRepository } from '../repositories/userDetail.repository';

import { EnvironmentConfigModule } from '../config/environment-config/environment-config.module';
import { EnvironmentConfigService } from '../config/environment-config/environment-config.service';
import { UseCaseProxy } from './usecases-proxy';

@Module({
  imports: [
    LoggerModule,
    JwtModule,
    BcryptModule,
    EnvironmentConfigModule,
    RepositoriesModule,
    ExceptionsModule,
  ],
})
export class UsecasesProxyModule {
  // Auth
  static LOGIN_USECASES_PROXY = 'LoginUseCasesProxy';
  static IS_AUTHENTICATED_USECASES_PROXY = 'IsAuthenticatedUseCasesProxy';
  static LOGOUT_USECASES_PROXY = 'LogoutUseCasesProxy';
  static GET_USER_DETAIL_EMAIL_USECASES_PROXY =
    'GetUserDetailEmailUseCasesProxy';
  static INSERT_USER_DETAIL_USECASES_PROXY = 'InsertUserDetailUseCasesProxy';

  static register(): DynamicModule {
    return {
      module: UsecasesProxyModule,
      providers: [
        {
          inject: [
            LoggerService,
            JwtTokenService,
            EnvironmentConfigService,
            DatabaseUserRepository,
            BcryptService,
          ],
          provide: UsecasesProxyModule.LOGIN_USECASES_PROXY,
          useFactory: (
            logger: LoggerService,
            jwtService: JwtTokenService,
            config: EnvironmentConfigService,
            userRepo: DatabaseUserRepository,
            bcryptService: BcryptService
          ) =>
            new UseCaseProxy(
              new LoginUseCases(
                logger,
                jwtService,
                config,
                userRepo,
                bcryptService
              )
            ),
        },
        {
          inject: [DatabaseUserRepository],
          provide: UsecasesProxyModule.IS_AUTHENTICATED_USECASES_PROXY,
          useFactory: (userRepo: DatabaseUserRepository) =>
            new UseCaseProxy(new IsAuthenticatedUseCases(userRepo)),
        },
        {
          inject: [],
          provide: UsecasesProxyModule.LOGOUT_USECASES_PROXY,
          useFactory: () => new UseCaseProxy(new LogoutUseCases()),
        },
        {
          inject: [DatabaseUserDetailRepository],
          provide: UsecasesProxyModule.GET_USER_DETAIL_EMAIL_USECASES_PROXY,
          useFactory: (userDetailRepo: DatabaseUserDetailRepository) =>
            new UseCaseProxy(new GetUserDetailUseCases(userDetailRepo)),
        },
        {
          inject: [DatabaseUserDetailRepository, LoggerService],
          provide: UsecasesProxyModule.INSERT_USER_DETAIL_USECASES_PROXY,
          useFactory: (
            userDetailRepo: DatabaseUserDetailRepository,
            logger: LoggerService
          ) =>
            new UseCaseProxy(
              new InsertUserDetailUseCases(logger, userDetailRepo)
            ),
        },
      ],
      exports: [
        UsecasesProxyModule.LOGIN_USECASES_PROXY,
        UsecasesProxyModule.IS_AUTHENTICATED_USECASES_PROXY,
        UsecasesProxyModule.LOGOUT_USECASES_PROXY,
        UsecasesProxyModule.GET_USER_DETAIL_EMAIL_USECASES_PROXY,
        UsecasesProxyModule.INSERT_USER_DETAIL_USECASES_PROXY,
      ],
    };
  }
}
