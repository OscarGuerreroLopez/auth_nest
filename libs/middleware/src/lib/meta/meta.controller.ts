import { Controller, Get, Request } from '@nestjs/common';
import { Request as ExpressRequest } from 'express';
import { DbService } from '@auth/types';
import { MetaService } from './meta.service';
import { MetaObject } from '@auth/types';

@Controller('meta')
export class MetaController {
  constructor(private readonly metaService: MetaService) {}

  @Get()
  getMeta(@Request() request: ExpressRequest): MetaObject {
    const dbInfo: DbService = request.dbService;

    if (!dbInfo) {
      console.error('No DB Info');
    }

    return this.metaService.getMetaInfo(dbInfo.db, 'nothing');
  }
}
