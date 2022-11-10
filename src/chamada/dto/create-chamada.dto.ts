import { IsObject, IsString } from 'class-validator';
import { Destino } from './destino.dto';
import { Opcionais } from './opcionais.dto';
import { Origem } from './origem.dto';
import { Passageiro } from './passageiros.dto';

export class CreateChamadaDto {
  @IsObject()
  readonly origem: Origem;

  @IsObject()
  readonly destino: Destino;

  @IsObject()
  readonly opcionais: Opcionais;

  @IsObject()
  readonly passageiro: Passageiro;

  @IsString()
  readonly justificativa?: string;

  @IsString()
  readonly referenciaId: string;

  @IsString()
  readonly atendimentoId: string;

  @IsString()
  readonly empresaAtendimento: string;
}
