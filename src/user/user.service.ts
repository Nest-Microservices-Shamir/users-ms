import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_REPOSITORY } from 'src/config';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  
  constructor(
    @Inject(USER_REPOSITORY) private userRepository: typeof User,
  ){}

  async findById(id: string): Promise<User | null> {
    const userQuery = await this.userRepository.scope('withoutPassword').findOne({ where: { id } });
    if (!userQuery) return null;
    return userQuery;
  }

  async findByEmail(email: string): Promise<User | null> {
    const userQuery = await this.userRepository.scope('withoutPassword').findOne({ where: { email } });
    if (!userQuery) return null;
    return userQuery;
  }

  async findByEmailWithPassword(email: string): Promise<User | null> {
    const userQuery = await this.userRepository.findOne({ where: { email } });
    if (!userQuery) return null;
    return userQuery;
  }

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.create({ ...createUserDto});
  }


}
