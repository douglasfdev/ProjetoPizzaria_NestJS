import { Test, TestingModule } from '@nestjs/testing';
import { ChamadaController } from './controllers/chamada.controller';
import { ChamadaService } from './chamada.service';

describe('ChamadaController', () => {
  let controller: ChamadaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChamadaController],
      providers: [ChamadaService],
    }).compile();

    controller = module.get<ChamadaController>(ChamadaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
