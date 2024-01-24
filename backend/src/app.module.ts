import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {MongooseModule} from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [UserModule,MongooseModule.forRoot(process.env.MONGO_URI),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
