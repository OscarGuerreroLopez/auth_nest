import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';
import { User } from '../entities';
import { DatabaseUserRepository } from './user.repository';
import { ExceptionsModule } from '../exceptions/exceptions.module';
import { ExceptionsService } from '../exceptions/exceptions.service';
@Module({
  imports: [
    TypeOrmConfigModule,
    TypeOrmModule.forFeature([User]),
    ExceptionsModule,
  ],
  providers: [DatabaseUserRepository, ExceptionsService],
  exports: [DatabaseUserRepository],
})
export class RepositoriesModule {}
