import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import  {Model}  from 'mongoose';


@Injectable()
export class UserService{
    private users: User[] = [];

    constructor(@InjectModel('User') private readonly userSchema:Model<User>) {}

    async register(userName:string,email:string,password:string,birthDate:Date,phone:string){
            const newUser = new this.userSchema({
                userName:userName,
                email:email,
                password:password,
                birthDate:birthDate,
                phone:phone
            })
            await newUser.save();
            return newUser;
    }

}