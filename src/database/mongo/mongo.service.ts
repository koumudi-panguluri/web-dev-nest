import { Injectable } from '@nestjs/common';
import { Collection, Db, MongoClient } from 'mongodb';

@Injectable()
export class MongoService {
    MONGO_URL: string;
    DB: string;
    SHOPPING_COLLECTION: string;
    ORDERS_COLLECTION: string;
    MongoClient: MongoClient;
    Db: Db;
    constructor() {
        const medeDBConfig = {
            url: "mongodb+srv://koumudi:koumudi1998@cluster0.knwya1b.mongodb.net/",
            name: "e-commerce",
            collections: {
                "shopping": "shopping",
                "orders": "orders"
            }
        }
        this.MONGO_URL = medeDBConfig.url;
        this.DB = medeDBConfig.name;
        this.SHOPPING_COLLECTION = medeDBConfig.collections.shopping;
        this.ORDERS_COLLECTION = medeDBConfig.collections.orders;

    }

    async onModuleInit(): Promise<void> {
        try {
            this.MongoClient = await MongoClient.connect(this.MONGO_URL);
            this.Db = this.MongoClient.db(this.DB);
            console.log("Connected to DB successfully ");

        } catch (e) {
            console.log("Error ", e);
        }
    }

    getShoppingCollection(): Collection {
        return this.Db.collection(this.SHOPPING_COLLECTION);
    }
    getOrdersCollection(): Collection {
        return this.Db.collection(this.ORDERS_COLLECTION);
    }
}
