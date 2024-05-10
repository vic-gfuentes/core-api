import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import prisma from '../../../lib/db';

export class UsersService {
  async index() {
    return await prisma.user.findMany();
  }

  async show(id: number) {
    return await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  async create(createUserDto: CreateUserDto) {
    return await prisma.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: updateUserDto.name,
        email: updateUserDto.email,
      },
    });
  }

  async delete(id: number) {
    return await prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
