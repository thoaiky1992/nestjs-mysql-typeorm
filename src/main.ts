import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Shop')
    .setDescription('The Shop API description')
    .setVersion('1.0')
    .addTag('shop')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(Number(process.env.PORT));
}
bootstrap();
