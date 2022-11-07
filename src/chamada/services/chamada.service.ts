import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { Chamada } from 'src/chamada/entities/chamada.entity';
import { Repository } from 'typeorm';
import { CreateChamadaDto } from '@dtos/create-chamada.dto';
import { UpdateChamadaDto } from '@dtos/update-chamada.dto';
import { HeadersConfig } from '@configs/headers.config';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ChamadaService {
  private readonly PRD_CHAMADA_URL: string = new ConfigService().get<string>(
    'PRD_CHAMADA_URL',
  );
  constructor(
    private readonly headersConfig: HeadersConfig,
    private readonly httpService: HttpService,
    @Inject('CHAMADA_REPOSITORY')
    private photoRepository: Repository<Chamada>,
  ) {}

  async create(createChamadaDto: CreateChamadaDto) {
    return 'This action adds a new chamada';
  }

  async findAll() {
    const url = this.PRD_CHAMADA_URL;
    console.log(url);
    const getChamada = await lastValueFrom(
      this.httpService.get(url, {
        headers: this.headersConfig.getHeaders(),
      }),
    );

    return getChamada.data;
  }

  async findOne(id: number) {
    return `This action returns a #${id} chamada`;
  }

  async update(id: number, updateChamadaDto: UpdateChamadaDto) {
    return `This action updates a #${id} chamada`;
  }

  async remove(id: number) {
    return `This action removes a #${id} chamada`;
  }
}
