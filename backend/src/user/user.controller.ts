import { Controller, Post, Body, UsePipes, ValidationPipe, UseFilters } from '@nestjs/common';
import { UserService } from './user.service';
import { MongoExceptionFilter } from 'src/common/mongo.exceptions';
import { CreateUserDto } from './user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('addUser')
    @UsePipes(new ValidationPipe({ transform: true }))
    async addUser(@Body() createUserDto: CreateUserDto) {
      const createdUser = await this.userService.create(
        createUserDto
      );
  
      return { result: createdUser };
    }
}
