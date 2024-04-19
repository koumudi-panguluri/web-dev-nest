import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getCategoryData(category: string): Promise<{
        code: string;
        message: string;
        data: import("mongodb").WithId<import("bson").Document>[];
    }>;
}
