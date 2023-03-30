import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSearchDTO } from './dto/user.search.dto';
import { UserSearch } from './enities/user-word.entity';
import { Users } from './enities/user.entity';

@Injectable()
export class UserSearchService {
  constructor(
    @InjectRepository(UserSearch)
    private userSearchRepository: Repository<UserSearch>,
  ) {}

  get(id: number) {
    return this.userSearchRepository.findOne({ where: { id } });
  }

  create(wordInfo: UserSearchDTO, user: Users) {
    return this.userSearchRepository.save({ ...wordInfo, user });
  }

  getAllUsers() {
    return this.userSearchRepository.find();
  }
}
