// user.dto.ts
import { IsNotEmpty, IsEmail, IsString, IsDate } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Username is required' })
  @IsString({ message: 'Username must be a string' })
  userName: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @IsString({ message: 'Password must be a string' })
  password: string;

  @IsNotEmpty({ message: 'BirthDate is required' })
  @Transform(({ value }) => new Date(value))
  @IsDate({ message: 'Invalid date format' })
  birthDate: Date;

  @IsNotEmpty({ message: 'Phone is required' })
  @IsString({ message: 'Phone must be a string' })
  phone: string;
}
