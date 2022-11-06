import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

const configService = new ConfigService();

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: configService.get('VDT_DB_HOST'),
        port: Number(configService.get('VDT_PORT')),
        username: configService.get('VDT_USER'),
        password: configService.get('VDT_ROOT_PASSWORD'),
        database: configService.get('VDT_DATABASE'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
