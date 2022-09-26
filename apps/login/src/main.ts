/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import {
  LoggerService,
  AllExceptionFilter,
  LoggingInterceptor,
  ResponseInterceptor,
} from '@auth/infrastructure';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'login';

  // Filter
  app.useGlobalFilters(new AllExceptionFilter(new LoggerService()));

  // interceptors
  app.useGlobalInterceptors(new LoggingInterceptor(new LoggerService()));
  app.useGlobalInterceptors(new ResponseInterceptor());

  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3334;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
