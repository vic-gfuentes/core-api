import prisma from '@lib/db';
import { User } from './user.schema';

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

  async create(data: User) {
    return await prisma.user.create({
      data: data,
    });
  }

  async update(id: number, data: User) {
    return await prisma.user.update({
      where: {
        id: id,
      },
      data: data,
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
