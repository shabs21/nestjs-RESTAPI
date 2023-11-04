import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PostDBI, PostDto } from './app.interface';
import {v4} from 'uuid'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:key')
  getHello(@Param('key') key: string): PostDBI {
    console.log(`param\n`,key)
    return this.appService.getHello(key);
  }

  @Post()
  postData(@Body() body: PostDto): any {

    console.log(typeof(body.Price))
    const res = this.appService.postDB(body)

    if(res.status == 'success'){
      return res
    }
    else{
      return {
        ...res,
        status: 'Error'
      }
    }

  }
}
