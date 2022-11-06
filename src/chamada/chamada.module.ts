import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ChamadaService } from '../services/chamada.service';
import { ChamadaController } from './controllers/chamada.controller';
import { chamadaProviders } from './entities/chamada.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ChamadaController],
  providers: [ChamadaService, ...chamadaProviders],
})
export class ChamadaModule {}
