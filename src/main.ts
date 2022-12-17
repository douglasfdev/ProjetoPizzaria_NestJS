import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { setupSwagger } from './docs/swagger.config';
import { ValidationPipe } from '@nestjs/common';

(async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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

  await app.listen(5555);
})();
