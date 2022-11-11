import { IsNotEmpty, IsObject, IsString } from 'class-validator';
import { Destino } from './destino.dto';
import { Opcionais } from './opcionais.dto';
import { Origem } from './origem.dto';
import { Passageiro } from './passageiros.dto';

export class CreateChamadaDto {
  @IsNotEmpty()
  @IsObject()
  readonly origem: Origem;

  @IsNotEmpty()
  @IsObject()
  readonly destino: Destino;

  @IsNotEmpty()
  @IsObject()
  readonly opcionais: Opcionais;

  @IsNotEmpty()
  @IsObject()
  readonly passageiro: Passageiro;

  @IsString()
  readonly justificativa?: string;

  @IsNotEmpty()
  @IsString()
  readonly referenciaId: string;

  @IsNotEmpty()
  @IsString()
  readonly atendimentoId: string;

  @IsNotEmpty()
  @IsString()
  readonly empresaAtendimento: string;
}
