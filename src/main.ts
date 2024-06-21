import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MockUserMiddleware } from './middleware/mock-user.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(new MockUserMiddleware().use);
  await app.listen(3000);
}
bootstrap();
