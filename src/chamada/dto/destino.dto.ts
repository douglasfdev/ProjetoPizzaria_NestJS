import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Destino {
  @IsNotEmpty()
  @IsNumber()
  readonly lat: number;

  @IsNotEmpty()
  @IsNumber()
  readonly lon: number;

  @IsNotEmpty()
  @IsString()
  readonly rua: string;

  @IsNotEmpty()
  @IsString()
  readonly numero: string;

  @IsNotEmpty()
  @IsString()
  readonly bairro: string;

  @IsNotEmpty()
  @IsString()
  readonly cidade: string;

  @IsNotEmpty()
  @IsString()
  readonly estado: string;
}
