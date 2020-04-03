import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';



@Controller('populacao')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:uf')
  getPopulacao(@Param('uf') uf): Object {
    console.log('GET')
    return this.appService.getPopulacao(uf.toUpperCase());
  }

  @Post('/')
  rcpPopulacao(@Param('uf') uf): void {
  }
  
}
