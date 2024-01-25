import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongoose';

@Entity()
export class User {
  
  @Column({ unique: true, nullable: false })
  userName: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  birthDate: Date;

  @Column({ unique: true, nullable: false })
  phone: string;
}
