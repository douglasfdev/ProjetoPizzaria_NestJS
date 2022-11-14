import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { CreateChamadaDto } from '@dtos/create-chamada.dto';
import { UpdateChamadaDto } from '@dtos/update-chamada.dto';
import { HeadersConfig } from '@configs/headers.config';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ChamadaService {
  private readonly PRD_CHAMADA_URL = new ConfigService().get('PRD_CHAMADA_URL');
  constructor(
    private readonly headersConfig: HeadersConfig,
    private readonly httpService: HttpService,
  ) {}

  // Cria chamada da corrida
  async createCall(createChamadaDto: CreateChamadaDto) {
    return 'This action adds a new chamada';
  }

  // Cria uma configuraçao externa
  // async externalConfig(createExternalConfigDto: CreateExternalConfigDto) {
  //   return 'This action add a new external config';
  // }

  // Pega o status da corrida
  async status() {
    const url = this.PRD_CHAMADA_URL;
    const getChamada = await lastValueFrom(
      this.httpService.get(url, {
        headers: this.headersConfig.getHeaders(),
      }),
    );

    return getChamada.data;
  }
  // Pega o status da corrida pelo D
  async statusCallById(id: number) {
    return `This action returns a #${id} status`;
  }

  // Pega a referencia por ID
  async referenceById(id: number) {
    return `This action returns a #${id} referencia`;
  }

  // Atualiza Chamada
  async updateCall(id: number, updateChamadaDto: UpdateChamadaDto) {
    return `This action updates a #${id} chamada`;
  }

  // Talvez nao precise, mas deleta a chamada
  async remove(id: number) {
    return `This action removes a #${id} chamada`;
  }
}
