import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const userSchema=new mongoose.Schema({
  userName:{type:String,required:true},
  email:{type:String,required:true,unique:true},
  password:{type:String,required:true,min:8},
  birthDate:{type:Date,required:true},
  phone:{type:String,required:true}
});


export interface User extends Document{
     userName: string;
     email: string;
     password: string;
     birthDate:Date;
     phone:String;
}