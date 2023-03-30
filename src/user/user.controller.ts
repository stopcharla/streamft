import { Body, Controller, Get, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateUserDTO } from "./dto/user.create.dto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService){};

  @Post()
  @UsePipes(ValidationPipe)
  createUser(@Body() body: CreateUserDTO) {
    return this.userService.create(body);
  }

  @Get(':id')
  getUser(@Query('id') id: number){
    return this.userService.get(id);
  }

  @Get()
  getAllUsers(){
    return this.userService.getAllUsers();
  }
}