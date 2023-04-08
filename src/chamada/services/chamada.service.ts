import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { CreateChamadaDto } from '@dtos/create-chamada.dto';
import { UpdateChamadaDto } from '@dtos/update-chamada.dto';
import { catchError, lastValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class ChamadaService {
  constructor(private readonly httpService: HttpService) {}

  // Cria chamada da corrida
  async createCall(createChamadaDto: CreateChamadaDto): Promise<string> {
    return 'This action adds a new chamada';
  }

  // Cria uma configuraçao externa
  // async externalConfig(createExternalConfigDto: CreateExternalConfigDto) {
  //   return 'This action add a new external config';
  // }

  /**
   *
   * @returns status da corrida
   * @param idChamada
   */
  async status(idChamada: number): Promise<CreateChamadaDto> {
    const url = `v2/chamada/${idChamada}`;

    const getChamada = await lastValueFrom(
      this.httpService.get(url).pipe(
        catchError((error: AxiosError) => {
          const error_data = error.response?.data;
          const { status }: { status?: number } = error;
          throw new HttpException(error_data, status);
        }),
      ),
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
