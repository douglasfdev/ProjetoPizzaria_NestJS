import { User } from '@prisma/client';

export class UserEntity implements User {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}
