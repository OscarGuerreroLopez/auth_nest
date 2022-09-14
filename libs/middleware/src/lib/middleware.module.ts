import { Module } from '@nestjs/common';
import { MetaController } from './meta/meta.controller';
import { MetaService } from './meta/meta.service';

@Module({
  controllers: [MetaController],
  providers: [MetaService],
  exports: [MetaService],
})
export class MiddlewareModule {}
