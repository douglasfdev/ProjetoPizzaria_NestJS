import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  //  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
// import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('v1/users')
// @UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async store(@Body() body: CreateUserDto) {
    return await this.usersService.store(body);
  }

  @Get(':email')
  async show(@Param('id') email: string) {
    return await this.usersService.findOneOrFail(email);
  }

  @Put(':email')
  async update(@Param('email') email: string, @Body() body: UpdateUserDto) {
    return await this.usersService.update(email, body);
  }

  @Delete(':email')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('email') email: string) {
    await this.usersService.destroy(email);
  }
}
