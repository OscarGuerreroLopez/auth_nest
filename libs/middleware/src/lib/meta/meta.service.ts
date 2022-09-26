import { Injectable } from '@nestjs/common';
import { EnvironmentConfigService } from '@auth/infrastructure';

@Injectable()
export class MetaService {
  constructor(
    private readonly environmentConfigService: EnvironmentConfigService
  ) {}

  getMetaInfo() {
    const info = {
      DbName: this.environmentConfigService.getDatabaseName(),
      NodeEnv: this.environmentConfigService.getNodeEnv(),
    };

    return info;
  }
}
