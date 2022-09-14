import { Injectable } from '@nestjs/common';
import { MetaObject } from '@auth/types';

@Injectable()
export class MetaService {
  getMetaInfo(dbName: string, env: string): MetaObject {
    const info = {
      DbName: dbName,
      NodeEnv: env,
    };

    return info;
  }
}
