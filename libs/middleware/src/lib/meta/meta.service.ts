import { Injectable } from '@nestjs/common';

@Injectable()
export class MetaService {
  getMetaInfo(dbName: string, env: string) {
    const info = {
      DbName: dbName,
      NodeEnv: env,
    };

    return info;
  }
}
