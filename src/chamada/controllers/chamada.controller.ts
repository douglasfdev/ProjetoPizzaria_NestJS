import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ChamadaService } from '@services/chamada.service';
import { CreateChamadaDto } from '@dtos/create-chamada.dto';
import { UpdateChamadaDto } from '@dtos/update-chamada.dto';

@ApiTags('Chamadas Taxista')
@Controller('chamada/taxista')
export class ChamadaController {
  constructor(private readonly chamadaService: ChamadaService) {}

  @Post()
  create(@Body() createChamadaDto: CreateChamadaDto) {
    return this.chamadaService.create(createChamadaDto);
  }

  @Get()
  findAll() {
    return this.chamadaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chamadaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChamadaDto: UpdateChamadaDto) {
    return this.chamadaService.update(+id, updateChamadaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chamadaService.remove(+id);
  }
}
