import { getEnvPath } from '@helpers/env.helper';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';

const envFilePath = getEnvPath(`${__dirname}/../common/envs`);
config({ path: envFilePath });

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  migrations: ['dist/database/migrations/*.js'],
  entities: ['dist/**/*.entity.js'],
};

export const datatasource = new DataSource(dataSourceOptions);
