import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiHeader, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { ChamadaService } from '@services/chamada.service';
import { CreateChamadaDto } from '@dtos/create-chamada.dto';
import { UpdateChamadaDto } from '@dtos/update-chamada.dto';

@ApiHeader({
  name: 'Basic Token',
  description: 'Basic token to auth login in our services',
})
@ApiTags('Chamadas Taxista')
@Controller('v1/')
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

  @Get('status')
  public status() {
    return this.chamadaService.status();
  }

  @Get('chamada/:idChamada')
  public statusCallById(@Param('id') id: string) {
    return this.chamadaService.statusCallById(+id);
  }

  @Get('reference/:idReference')
  public referenceById(@Param('id') id: string) {
    return this.chamadaService.referenceById(+id);
  }

  @Patch('chamada/:id')
  public update(
    @Param('id') id: string,
    @Body() updateChamadaDto: UpdateChamadaDto,
  ) {
    return this.chamadaService.updateCall(+id, updateChamadaDto);
  }

  @Delete(':id')
  public remove(@Param('id') id: string) {
    return this.chamadaService.remove(+id);
  }
}
