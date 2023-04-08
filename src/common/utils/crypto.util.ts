import { randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

export const hashPassword = (user: CreateUserDto, password: string) => {
  const salt = randomBytes(16).toString('base64');
  const hash = scryptSync(password, salt, 128).toString('base64');
  user.password = `${salt}:${hash}`;
  return user.password;
};

export const comparePassword = (user: CreateUserDto, password: string) => {
  const [salt, key] = user.password.split(':');
  const hashedBuffer = scryptSync(password, salt, 128);
  const keyBuffer = Buffer.from(key, 'base64');
  const match = timingSafeEqual(hashedBuffer, keyBuffer);

  return match;
};
