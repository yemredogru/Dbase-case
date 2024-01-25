export interface User extends Document {
    userName: string;
    email: string;
    password: string;
    birthDate: Date;
    phone: string;
  }