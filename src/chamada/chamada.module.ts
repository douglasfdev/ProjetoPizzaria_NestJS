import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ChamadaService } from './services/chamada.service';
import { ChamadaController } from './controllers/chamada.controller';
import { chamadaProviders } from './entities/chamada.providers';
import { HeadersConfig } from '../configs/headers.config';

@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [ChamadaController],
  providers: [ChamadaService, HeadersConfig, ...chamadaProviders],
})
export class ChamadaModule {}
