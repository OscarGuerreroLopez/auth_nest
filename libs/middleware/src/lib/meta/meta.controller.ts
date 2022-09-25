import { Controller, Get, Request } from '@nestjs/common';
import { Request as ExpressRequest } from 'express';

import { MetaService } from './meta.service';

@Controller('meta')
export class MetaController {
  constructor(private readonly metaService: MetaService) {}

  @Get()
  getMeta(@Request() request: ExpressRequest) {
    let dbInfo = request.dbService;

    if (!dbInfo) {
      console.error('No DB Info');
      dbInfo = { db: 'no db yet', getInfo: () => 'No Db' };
    }

    return this.metaService.getMetaInfo(dbInfo.db, 'nothing');
  }
}
