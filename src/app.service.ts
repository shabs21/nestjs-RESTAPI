import { Injectable } from '@nestjs/common';
import { PostRet, PostI, PostDBI } from './app.interface';
import { uuid } from 'uuidv4';

@Injectable()
export class AppService {

  private DB: Array<PostDBI>


  constructor(){
    this.DB = []
  }

  
  getHello(id: string): PostDBI {
    const item = this.DB.filter((item: PostDBI) => item.key == id);
    console.log(this.DB)
    console.log(item)
    return item[0]
  }

  postDB(postI: PostI): PostRet {

    const newRecord = {...postI, key: uuid()}

    this.DB = [...this.DB, newRecord]

    console.log(this.DB)

    return {
      status: 'success',
      payload: newRecord
    }
  }
}
