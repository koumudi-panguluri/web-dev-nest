import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoService } from './database/mongo/mongo.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MongoService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .forRoutes()
  }
}
