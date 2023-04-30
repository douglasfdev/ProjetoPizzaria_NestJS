import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { setupSwagger } from './docs/swagger.config';
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { config } from 'dotenv';
import { getEnvPath } from '@helpers/env.helper';

const envFilePath = getEnvPath(`${__dirname}/../common/envs`);
config({ path: envFilePath });

(async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();

  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.enableCors();

  app.use(helmet());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  setupSwagger(app);

  await app.listen(process.env.PORT || 5555, () => {
    logger.log(`ENV: ${process.env.NODE_ENV}`);
    logger.log(`PORT: ${process.env.PORT}`);
    logger.log(`HOST: http://localhost:${process.env.PORT}/`);
  });
})();
