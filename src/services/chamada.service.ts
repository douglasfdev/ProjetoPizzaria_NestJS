import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { Chamada } from 'src/chamada/entities/chamada.entity';
import { Repository } from 'typeorm';
import { CreateChamadaDto } from '../chamada/dto/create-chamada.dto';
import { UpdateChamadaDto } from '../chamada/dto/update-chamada.dto';
import { HeadersConfig } from '../configs/headers.config';

@Injectable()
export class ChamadaService {
  constructor(
    private readonly headersConfig: HeadersConfig,
    private readonly httpService: HttpService,
    @Inject('CHAMADA_REPOSITORY')
    private photoRepository: Repository<Chamada>,
  ) {}
  create(createChamadaDto: CreateChamadaDto) {
    return 'This action adds a new chamada';
  }

  findAll() {
    return ``;
  }

  findOne(id: number) {
    return `This action returns a #${id} chamada`;
  }

  update(id: number, updateChamadaDto: UpdateChamadaDto) {
    return `This action updates a #${id} chamada`;
  }

  remove(id: number) {
    return `This action removes a #${id} chamada`;
  }
}
