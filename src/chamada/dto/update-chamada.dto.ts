import { PartialType } from '@nestjs/swagger';
import { CreateChamadaDto } from './create-chamada.dto';

export class UpdateChamadaDto extends PartialType(CreateChamadaDto) {}
