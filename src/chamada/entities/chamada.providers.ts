import { DataSource } from 'typeorm';
import { Chamada } from './chamada.entity';

export const chamadaProviders = [
  {
    provide: 'CHAMADA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Chamada),
    inject: ['DATA_SOURCE'],
  },
];
