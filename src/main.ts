import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { setupSwagger } from './docs/swagger.config';

(async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());

  setupSwagger(app);

  await app.listen(3001);
})();
