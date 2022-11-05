import { Module } from '@nestjs/common';
import { ChamadaService } from '../services/chamada.service';
import { ChamadaController } from './controllers/chamada.controller';

@Module({
  controllers: [ChamadaController],
  providers: [ChamadaService],
})
export class ChamadaModule {}
