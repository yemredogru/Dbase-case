import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';


import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userSchema } from './user.model';
import { APP_FILTER } from '@nestjs/core';
import { MongoExceptionFilter } from 'src/common/mongo.exceptions';

@Module({
    imports:[MongooseModule.forFeature([{name:'User',schema:userSchema}])],
    controllers: [UserController],
    providers: [UserService,{
        provide:APP_FILTER,
        useClass:MongoExceptionFilter
    }],
})
export class UserModule {}