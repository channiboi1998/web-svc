import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import socketProxy from './proxy.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(socketProxy); // Apply the proxy middleware

  await app.listen(4000);
}

bootstrap();
