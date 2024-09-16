import prisma from '@lib/db';
import { User } from './user.schema';
import bcrypt from 'bcrypt';

export class UsersService {
  private saltRounds: number = 10;

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
    const hashedPassword = await bcrypt.hash(data.password, this.saltRounds);

    return await prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }

  async update(id: number, data: User) {
    const updateData: any = { ...data };

    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, this.saltRounds);
    }

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
