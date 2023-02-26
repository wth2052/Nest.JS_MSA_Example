import { NestFactory } from '@nestjs/core';
import { MarketsModule } from './markets.module';

async function bootstrap() {
  const app = await NestFactory.create(MarketsModule);
  await app.listen(3000);
}
bootstrap();
