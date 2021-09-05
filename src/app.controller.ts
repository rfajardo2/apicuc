import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { prototype } from 'events';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id/code/:user_code')
  getHello(
    @Param('id') user_id:number,
    @Param('user_code') code:string
  ): any {
    console.log("user: " + user_id);
    console.log("code: " + code);

    return this.appService.getHello();
  }

  @Post(':id')
  postaData(
    @Param('id') id:number,
    @Body() data:any
  ):string{
    console.log("body : " , data);
    
    console.log("test");
    return "Buenas tardes!."
  }
}
