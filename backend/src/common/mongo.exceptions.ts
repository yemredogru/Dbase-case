import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { MongoError } from 'mongodb';

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();
    switch (exception.code) {
      case 11000:
        let duplicateField = "Unknown field";
        
        if (exception.message.includes('email')) {
          duplicateField = 'Email';
        } else if (exception.message.includes('userName')) {
          duplicateField = 'Username';
        } else if (exception.message.includes('phone')) {
          duplicateField = 'Phone number';
        }

        response.status(HttpStatus.CONFLICT).json({
          message: `Duplicate key error. This ${duplicateField} is already in use.`,
        });
        break;
      case 121:
        response.status(HttpStatus.BAD_REQUEST).json({
          message: 'Invalid phone number format.',
        });
        break;
      default:
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'An unexpected error occurred.',
        });
        break;
    }
  }
}
