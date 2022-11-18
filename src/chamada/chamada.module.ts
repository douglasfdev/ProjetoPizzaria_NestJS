import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ChamadaService } from '@services/chamada.service';
import { ChamadaController } from '@controllers/chamada.controller';
import { HeadersConfig } from '@configs/headers.config';

@Module({
  imports: [HttpModule],
  controllers: [ChamadaController],
  providers: [ChamadaService, HeadersConfig],
  exports: [ChamadaService],
})
export class ChamadaModule {}
