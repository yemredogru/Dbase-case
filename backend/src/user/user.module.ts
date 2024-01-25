import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';


import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userSchema } from './user.model';
import { APP_FILTER } from '@nestjs/core';
import { MongoExceptionFilter } from 'src/common/mongo.exceptions';
import { DatabaseModule } from 'src/database/database.module';
import { DatabaseService } from 'src/database/database.service';

@Module({
    imports:[DatabaseModule],
    controllers: [UserController],
    providers: [UserService,DatabaseService,{provide:APP_FILTER,useClass:MongoExceptionFilter}],
})
export class UserModule {}