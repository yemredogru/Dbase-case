import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { userName, email, password, birthDate, phone } = createUserDto;

    const newUser = await this.databaseService.addNewUser({
      userName,
      email,
      password,
      birthDate,
      phone,
    });

    return newUser;
  }
}
