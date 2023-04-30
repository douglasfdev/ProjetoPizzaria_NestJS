import { getEnvPath } from '@helpers/env.helper';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';

const envFilePath = getEnvPath(`${__dirname}/../common/envs`);
config({ path: envFilePath });

export const dataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  migrations: [__dirname + '/migrations/*{.js,.ts}'],
  entities: ['dist/**/*.entity{.js,.ts}'],
  synchronize: true, //never use true on production,
  autoLoadEntites: true,
} as DataSourceOptions;

export const datatasource = new DataSource(dataSourceOptions);
