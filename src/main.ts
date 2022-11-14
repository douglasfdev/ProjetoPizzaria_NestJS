import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { setupSwagger } from './docs/swagger.config';
import * as csurf from 'csurf';
// import { basicAuth } from './auth/basic.auth';

(async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.use(helmet());

  app.use(csurf());

  setupSwagger(app);

  // app.use(basicAuth);

  await app.listen(3000);
})();
