import { MongoService } from './database/mongo/mongo.service';
export declare class AppService {
    private mongoService;
    constructor(mongoService: MongoService);
    getHello(): string;
    getShoppingCategoryData(category: string): Promise<import("mongodb").WithId<import("bson").Document>[]>;
    getOrdersData(orderId: string): Promise<import("mongodb").WithId<import("bson").Document>[]>;
}
