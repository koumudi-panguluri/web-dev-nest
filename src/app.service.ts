import { Injectable } from '@nestjs/common';
import { MongoService } from './database/mongo/mongo.service';

@Injectable()
export class AppService {
  constructor(
    private mongoService: MongoService,
  ) { }

  getHello(): string {
    return 'Hello World!';
  }

  getShoppingCategoryData(category: string) {
    const query = {
      category,
    };
    console.log("Getting data with query ", JSON.stringify(query));

    return this.mongoService.getShoppingCollection().find(query, {
      projection: {
        _id: false,
      },
    }).sort({ timestamp: -1 }).toArray();
  }

  getOrdersData(orderId: string) {
    const query = {
      orderId,
    };
    console.log("Getting data with query ", JSON.stringify(query));

    return this.mongoService.getOrdersCollection().find(query, {
      projection: {
        _id: false,
      },
    }).sort({ timestamp: -1 }).limit(1).toArray();
  }


}
