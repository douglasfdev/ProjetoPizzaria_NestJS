import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ChamadaService } from '@services/chamada.service';
import { ChamadaController } from '@controllers/chamada.controller';
import { HeadersConfig } from '@configs/headers.config';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        baseUrl: configService.get('HMG_CHAMADA_URL'),
        headers: {
          APIPP_CUSTOMER: configService.get('APIPP_CUSTOMER'),
          APIPP_PRIVATE: configService.get('APIPP_PRIVATE'),
          APIPP_HASH: configService.get('APIPP_HASH'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [ChamadaController],
  providers: [ChamadaService, HeadersConfig],
  exports: [ChamadaService],
})
export class ChamadaModule {}
