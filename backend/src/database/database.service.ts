import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model, MongooseError } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectModel('User')
    private userRepository: Model<User>,
  ) {}

  async addNewUser(newUser: Partial<User>): Promise<User> {
      const createdUser = new this.userRepository(newUser);
    await createdUser.save()
    return createdUser
   
  }
}
