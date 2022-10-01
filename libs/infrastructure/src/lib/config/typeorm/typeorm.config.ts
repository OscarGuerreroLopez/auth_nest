import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { EnvironmentConfigService } from '../environment-config';

const envs = new EnvironmentConfigService(new ConfigService());

const config = new DataSource({
  type: 'mysql',
  host: envs.getDatabaseHost(),
  port: envs.getDatabasePort(),
  username: envs.getDatabaseUser(),
  password: envs.getDatabasePassword(),
  database: envs.getDatabaseName(),
  synchronize: envs.getDatabaseSync(),
  logging: true,
  entities: [__dirname + './../../**/*.entity{.ts,.js}'],
  migrationsRun: true,
  migrationsTableName: 'migration_user',
  migrations: ['database/migrations/**/*{.ts,.js}'],
});
// console.log(config);

export default config;
