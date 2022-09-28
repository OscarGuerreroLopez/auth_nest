import { DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { EnvironmentConfigService } from '../environment-config';

// (alias) class ConfigService<K = Record<string, unknown>, WasValidated extends boolean = false>
// import ConfigService

const envs = new EnvironmentConfigService(new ConfigService());

const config: DataSourceOptions = {
  type: 'postgres',
  host: envs.getDatabaseHost(),
  port: envs.getDatabasePort(),
  username: envs.getDatabaseUser(),
  password: envs.getDatabasePassword(),
  database: envs.getDatabaseName(),
  entities: [__dirname + './../../**/*.entity{.ts,.js}'],
  synchronize: false,
  schema: envs.getDatabaseSchema(),
  migrationsRun: true,
  migrationsTableName: 'migration_user',
  migrations: ['database/migrations/**/*{.ts,.js}'],

  // ssl: {
  //   rejectUnauthorized: false,
  // },
};

console.log(config);

export default config;
