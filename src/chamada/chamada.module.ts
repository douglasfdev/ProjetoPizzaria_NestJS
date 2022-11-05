import { Module } from '@nestjs/common';
import { ChamadaService } from './chamada.service';
import { ChamadaController } from './chamada.controller';

@Module({
  controllers: [ChamadaController],
  providers: [ChamadaService]
})
export class ChamadaModule {}
