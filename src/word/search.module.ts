import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { DictionaryService } from './dictionary.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../user/enities/user.entity';
import { UserModule } from '../user/user.module';

@Module({
  imports: [HttpModule, UserModule],
  controllers: [SearchController],
  providers: [DictionaryService],
})
export class SearchModule {}
