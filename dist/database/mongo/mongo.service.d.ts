import { Collection, Db, MongoClient } from 'mongodb';
export declare class MongoService {
    MONGO_URL: string;
    DB: string;
    SHOPPING_COLLECTION: string;
    ORDERS_COLLECTION: string;
    MongoClient: MongoClient;
    Db: Db;
    constructor();
    onModuleInit(): Promise<void>;
    getShoppingCollection(): Collection;
    getOrdersCollection(): Collection;
}
