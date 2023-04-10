import { getEnvPath } from '@helpers/env.helper';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';

const envFilePath = getEnvPath(`${__dirname}/../common/envs`);
config({ path: envFilePath });

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'pizzaria',
  username: 'userroot',
  password: 'pizzaria',
  migrations: [__dirname + '/migrations/*{.js,.ts}'],
  entities: ['dist/**/*.entity.js'],
  synchronize: true, //nver use true on production
};

export const datatasource = new DataSource(dataSourceOptions);
