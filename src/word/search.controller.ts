import { BadRequestException, Controller, Get, Param, Query } from "@nestjs/common";
import { UserSearchDTO } from "../user/dto/user.search.dto";
import { UserService } from "../user/user.service";
import { DictionaryService } from "./dictionary.service";

@Controller('search')
export class SearchController{
  constructor(private readonly dictionaryService: DictionaryService, private userService: UserService){};

  @Get()
  getWordData(@Query('word') word: string) {
    console.log({word});
    return this.dictionaryService.getWordFromDictionary(word);
  }

  @Get(':id')
  async getWordForUser(@Param('id') userId: number, @Query() queryParams: UserSearchDTO){
    const user = await this.userService.get(userId);
    if(user){
      const definition = this.dictionaryService.getWordFromDictionary(queryParams.word);
      
    }else{
      throw new BadRequestException('user not found');
    }
  }
}