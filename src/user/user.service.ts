import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDTO } from "./dto/user.create.dto";
import { Users } from "./enities/user.entity";

@Injectable()
export class UserService {
  constructor(@InjectRepository(Users) private usersRepository: Repository<Users>){}

  get(userId: number){
    return this.usersRepository.findOne({ where: { id: userId } });
  }

  create(userData: CreateUserDTO){
    return this.usersRepository.save(userData);
  }

  getAllUsers(){
    return this.usersRepository.find();
  }
}