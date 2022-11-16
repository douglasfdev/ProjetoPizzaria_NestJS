import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
// import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @IsPublic()
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.signup(createUserDto);
  }

  @Get('/:email')
  async findByEmail(@Param('email') email: string) {
    return this.userService.findByEmail(email);
  }

  @Put(':email')
  async update(@Param('email') email: string) {
    return '';
  }

  @Delete(':email')
  async delete(@Param('email') email: string) {
    return '';
  }
}
