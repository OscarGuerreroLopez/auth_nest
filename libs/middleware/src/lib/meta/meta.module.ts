import { Module } from '@nestjs/common';
import {
  EnvironmentConfigModule,
  EnvironmentConfigService,
} from '@auth/infrastructure';

@Module({
  imports: [EnvironmentConfigModule],
  providers: [EnvironmentConfigService],
})
export class MetaModule {}
