import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Web')
@Controller('web')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/:category")
  async getCategoryData(@Param("category") category: string) {
    try {
      console.log("category", category);
      const shoppingData = await this.appService.getShoppingCategoryData(category);
      return {
        code: "Ok",
        message: "Shopping Data obtained successfully",
        data: shoppingData,
      };
    } catch (e) {
      throw new HttpException("Could not get shopping data", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
