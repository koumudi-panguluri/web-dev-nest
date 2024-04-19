"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoService = void 0;
const common_1 = require("@nestjs/common");
const mongodb_1 = require("mongodb");
let MongoService = class MongoService {
    constructor() {
        const medeDBConfig = {
            url: "mongodb+srv://koumudi:koumudi1998@cluster0.knwya1b.mongodb.net/",
            name: "e-commerce",
            collections: {
                "shopping": "shopping",
                "orders": "orders"
            }
        };
        this.MONGO_URL = medeDBConfig.url;
        this.DB = medeDBConfig.name;
        this.SHOPPING_COLLECTION = medeDBConfig.collections.shopping;
        this.ORDERS_COLLECTION = medeDBConfig.collections.orders;
    }
    async onModuleInit() {
        try {
            this.MongoClient = await mongodb_1.MongoClient.connect(this.MONGO_URL);
            this.Db = this.MongoClient.db(this.DB);
            console.log("Connected to DB successfully ");
        }
        catch (e) {
            console.log("Error ", e);
        }
    }
    getShoppingCollection() {
        return this.Db.collection(this.SHOPPING_COLLECTION);
    }
    getOrdersCollection() {
        return this.Db.collection(this.ORDERS_COLLECTION);
    }
};
exports.MongoService = MongoService;
exports.MongoService = MongoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MongoService);
//# sourceMappingURL=mongo.service.js.map