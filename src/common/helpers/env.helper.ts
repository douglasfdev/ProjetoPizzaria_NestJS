import { ConfigService } from '@nestjs/config';
import { existsSync } from 'fs';
import { resolve } from 'path';

const configService = new ConfigService();

export function getEnvPath(dest: string): string {
  const env: string | undefined = configService.get<string>('NODE_ENV');
  const fallback: string = resolve(`${dest}/.env`);
  const filename: string = env ? `${env}.env` : 'development.env';
  let filePath: string = resolve(`${dest}/${filename}`);

  if (!existsSync(filePath)) {
    filePath = fallback;
  }

  return filePath;
}
