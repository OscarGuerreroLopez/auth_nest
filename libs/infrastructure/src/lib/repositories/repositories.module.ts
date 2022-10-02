import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';
import { User, UserDetail } from '../entities';
import { DatabaseUserRepository } from './user.repository';
import { DatabaseUserDetailRepository } from './userDetail.repository';
import { ExceptionsModule } from '../exceptions/exceptions.module';
import { ExceptionsService } from '../exceptions/exceptions.service';
@Module({
  imports: [
    TypeOrmConfigModule,
    TypeOrmModule.forFeature([User, UserDetail]),
    ExceptionsModule,
  ],
  providers: [
    DatabaseUserRepository,
    DatabaseUserDetailRepository,
    ExceptionsService,
  ],
  exports: [DatabaseUserRepository, DatabaseUserDetailRepository],
})
export class RepositoriesModule {}
