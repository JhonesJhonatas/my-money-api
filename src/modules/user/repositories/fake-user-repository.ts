import { User } from "@prisma/client";
import { randomUUID } from "crypto";

import { ICreateUserDTO, IUserRepositoryDTO } from "@user/dtos";

export class FakeUserRepository implements IUserRepositoryDTO {
  private users: User[] = [];

  async create(data: ICreateUserDTO): Promise<User> {
    const user: User = {
      id: randomUUID(),
      name: data.name,
      email: data.email,
      password: data.password,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.users.push(user);

    return user;
  }
}
