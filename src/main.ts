import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as bodyParser from 'body-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

  // Swagger Initialization   // TODO : Setup Documentation tags - Multiple Specifications is possible
  const options = new DocumentBuilder()
    .setTitle("API Documentation")
    .setDescription("Swagger based API docs for each endpoint")
    .setVersion("1.0")
    .addTag("API")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api", app, document);


  // ValidationPipe for Validating case sheet fields 

  app.useGlobalPipes(new ValidationPipe({ // Enable validation pipe
    whitelist: true, // Stripping undefined properties from dto's
    transform: true, // Transform the dto fields to defined datatypes
  }));



  await app.listen(process.env.PORT || 4000);
}
bootstrap();
