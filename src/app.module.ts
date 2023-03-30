import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmModuleOptions } from './typeorm.config';
import { SearchModule } from './word/search.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmModuleOptions),SearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
