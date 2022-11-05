import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChamadaModule } from './chamada/chamada.module';
import { getEnvPath } from './common/helpers/env.helper';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    ChamadaModule,
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
