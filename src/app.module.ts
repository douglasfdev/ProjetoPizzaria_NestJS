import { Module } from '@nestjs/common';
import { ChamadaModule } from './chamada/chamada.module';

@Module({
  imports: [ChamadaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
