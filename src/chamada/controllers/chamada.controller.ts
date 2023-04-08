import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiHeader, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { ChamadaService } from '@services/chamada.service';
import { CreateChamadaDto } from '@dtos/create-chamada.dto';
import { UpdateChamadaDto } from '@dtos/update-chamada.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiHeader({
  name: 'Bearer Token',
  description: 'Bearar token to auth login in our services',
})
@ApiTags('Chamadas Taxista')
@Controller('v1/')
@UseGuards(AuthGuard('jwt'))
export class ChamadaController {
  constructor(private readonly chamadaService: ChamadaService) {}

  @Post('chamada')
  public createCall(@Body() createChamadaDto: CreateChamadaDto) {
    return this.chamadaService.createCall(createChamadaDto);
  }

  // @Post('config')
  // externalConfig(@Body() createExternalConfigDto: createExternalConfigDto) {
  //   return this.chamadaService.externalConfig(createExternalConfigDto);
  // }

  @Get('status/:id')
  public status(@Param('id') idChamada: number) {
    return this.chamadaService.status(idChamada);
  }

  @Get('chamada/:idChamada')
  public statusCallById(@Param('id') id: number) {
    return this.chamadaService.statusCallById(id);
  }

  @Get('reference/:idReference')
  public referenceById(@Param('id') id: number) {
    return this.chamadaService.referenceById(id);
  }

  @Patch('chamada/:id')
  public update(
    @Param('id') id: string,
    @Body() updateChamadaDto: UpdateChamadaDto,
  ) {
    return this.chamadaService.updateCall(+id, updateChamadaDto);
  }

  @Delete(':id')
  public remove(@Param('id') id: number) {
    return this.chamadaService.remove(id);
  }
}
