import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Origem {
  @IsNumber()
  @IsNotEmpty()
  readonly lat: number;

  @IsNumber()
  @IsNotEmpty()
  readonly lon: number;

  @IsString()
  @IsNotEmpty()
  readonly rua: string;

  @IsNumber()
  @IsNotEmpty()
  readonly numero: string;

  @IsString()
  readonly complemento?: string;

  @IsString()
  @IsNotEmpty()
  readonly observacoes: string;

  @IsString()
  @IsNotEmpty()
  readonly bairro: string;

  @IsString()
  @IsNotEmpty()
  readonly cidade: string;

  @IsString()
  @IsNotEmpty()
  readonly estado: string;
}
