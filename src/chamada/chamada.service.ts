import { Injectable } from '@nestjs/common';
import { CreateChamadaDto } from './dto/create-chamada.dto';
import { UpdateChamadaDto } from './dto/update-chamada.dto';

@Injectable()
export class ChamadaService {
  create(createChamadaDto: CreateChamadaDto) {
    return 'This action adds a new chamada';
  }

  findAll() {
    return `This action returns all chamada`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chamada`;
  }

  update(id: number, updateChamadaDto: UpdateChamadaDto) {
    return `This action updates a #${id} chamada`;
  }

  remove(id: number) {
    return `This action removes a #${id} chamada`;
  }
}
