import { PrismaClient, User } from "@prisma/client";

import { ICreateUserDTO, IUserRepositoryDTO } from "@user/dtos";

export class UserRepository implements IUserRepositoryDTO {
  private prismaClient: PrismaClient = new PrismaClient();

  async create(data: ICreateUserDTO): Promise<User> {
    return this.prismaClient.user.create({ data });
  }
}
