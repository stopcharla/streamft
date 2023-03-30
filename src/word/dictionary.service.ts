import { HttpService } from "@nestjs/axios";
import { Injectable, NotFoundException } from "@nestjs/common";
import { firstValueFrom } from "rxjs";

@Injectable()
export class DictionaryService {
  constructor(private http: HttpService) {}

  async getWordFromDictionary(word: string) {
    try{
      let res = await firstValueFrom(this.http.get(
      'https://api.dictionaryapi.dev/api/v2/entries/en/'+word,
      ));
      console.log({ res });
      return res.data;
    }catch(err){
      throw new NotFoundException();
    }
    
  }
}