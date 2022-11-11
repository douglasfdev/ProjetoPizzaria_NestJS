import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class Opcionais {
  @IsNotEmpty()
  @IsBoolean()
  readonly ar: boolean;

  @IsNotEmpty()
  @IsBoolean()
  readonly portamalas: boolean;

  @IsNotEmpty()
  @IsBoolean()
  readonly animal: boolean;

  @IsNotEmpty()
  @IsBoolean()
  readonly cadeirante: boolean;

  @IsNotEmpty()
  @IsBoolean()
  readonly premier: boolean;

  @IsNotEmpty()
  @IsNumber()
  readonly categoria: number;
}
