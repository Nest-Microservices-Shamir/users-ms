import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'user.create_new_user' })
  create(@Payload() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @MessagePattern({ cmd: 'user.find_by_email' })
  findByEmail(@Payload('email') email: string) {
    return this.userService.findByEmail(email);
  }

  @MessagePattern({ cmd: 'user.find_by_email_with_password' })
  findByEmailWithPassword(@Payload('email') email: string) {
    return this.userService.findByEmailWithPassword(email);
  }

  @MessagePattern({ cmd: 'user.find_by_id' })
  findById(@Payload('id') id: string) {
    return this.userService.findById(id);
  }

}
