import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MetaController, MetaService } from '@auth/middleware';
import {
  EnvironmentConfigModule,
  EnvironmentConfigService,
} from '@auth/infrastructure';

@Module({
  imports: [EnvironmentConfigModule],
  controllers: [AppController, MetaController],
  providers: [AppService, MetaService, EnvironmentConfigService],
})
export class AppModule {}
