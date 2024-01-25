import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from 'src/user/user.model';
import * as dotenv from 'dotenv';
import { APP_FILTER } from '@nestjs/core';
import { MongoExceptionFilter } from 'src/common/mongo.exceptions';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
  ],
  providers:[{
    provide:APP_FILTER,
    useClass:MongoExceptionFilter
  }],
  exports: [MongooseModule],
})
export class DatabaseModule {}