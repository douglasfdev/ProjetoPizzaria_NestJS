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
@Controller('v1/')
export class ChamadaController {
  constructor(private readonly chamadaService: ChamadaService) {}

  @Post('chamada')
  createCall(@Body() createChamadaDto: CreateChamadaDto) {
    return this.chamadaService.createCall(createChamadaDto);
  }

  // @Post('config')
  // externalConfig(@Body() createExternalConfigDto: createExternalConfigDto) {
  //   return this.chamadaService.externalConfig(createExternalConfigDto);
  // }

  @Get('status')
  status() {
    return this.chamadaService.status();
  }

  @Get('chamada/:idChamada')
  statusCallById(@Param('id') id: string) {
    return this.chamadaService.statusCallById(+id);
  }

  @Get('reference/:idReference')
  referenceById(@Param('id') id: string) {
    return this.chamadaService.referenceById(+id);
  }

  @Patch('chamada/:id')
  update(@Param('id') id: string, @Body() updateChamadaDto: UpdateChamadaDto) {
    return this.chamadaService.updateCall(+id, updateChamadaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chamadaService.remove(+id);
  }
}
