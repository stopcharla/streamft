import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './enities/user.entity';
import { UserSearchService } from './user-word.service';
import { UserSearch } from './enities/user-word.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users, UserSearch])],
  controllers: [UserController],
  providers: [UserService, UserSearchService],
  exports: [UserService, UserSearchService],
})
export class UserModule {}
