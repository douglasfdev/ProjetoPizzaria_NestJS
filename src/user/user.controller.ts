import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
// import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @IsPublic()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.signup(createUserDto);
  }

  @Get('/:email')
  findByEmail(@Param('email') email: string) {
    return this.userService.findByEmail(email);
  }
}
