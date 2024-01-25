import { MongoError } from 'mongodb';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const userSchema=new mongoose.Schema({
  userName:{type:String,required:true,unique:true},
  email:{type:String,required:true,unique:true},
  password:{type:String,required:true,min:8},
  birthDate:{type:Date,required:true},
  phone: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value: string) {
        const phoneRegex = /^(?:[0-9] ?){6,14}[0-9]$/;
        if (!phoneRegex.test(value)) {
          throw new MongoError('Invalid phone number format');
        }
        return true;
      },
    },
  },
});