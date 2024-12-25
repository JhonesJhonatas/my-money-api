import { PrismaClient, User } from '@prisma/client'

import {
  ICreateUserDTO,
  IFindUserByEmailDTO,
  IUserRepositoryDTO,
} from '@user/dtos'

export class UserRepository implements IUserRepositoryDTO {
  private prismaClient: PrismaClient = new PrismaClient()

  async create(data: ICreateUserDTO): Promise<User> {
    return this.prismaClient.user.create({ data })
  }

  async findByEmail(data: IFindUserByEmailDTO): Promise<User | null> {
    return this.prismaClient.user.findUnique({ where: { email: data.email } })
  }
}
