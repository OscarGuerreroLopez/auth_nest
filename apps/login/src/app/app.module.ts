import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MetaController, MetaService } from '@auth/middleware';

@Module({
  imports: [],
  controllers: [AppController, MetaController],
  providers: [AppService, MetaService],
})
export class AppModule {}
