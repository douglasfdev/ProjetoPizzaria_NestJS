import { IsNotEmpty, IsString } from 'class-validator';

export class Passageiro {
  @IsString()
  @IsNotEmpty()
  readonly nome: string;

  @IsNotEmpty()
  @IsString()
  readonly telefone: string;
}
