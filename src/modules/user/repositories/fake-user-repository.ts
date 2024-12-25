import { User } from '@prisma/client'
import { randomUUID } from 'crypto'

import {
  ICreateUserDTO,
  IFindUserByEmailDTO,
  IUserRepositoryDTO,
} from '@user/dtos'

export class FakeUserRepository implements IUserRepositoryDTO {
  private users: User[] = []

  async create(data: ICreateUserDTO): Promise<User> {
    const user: User = {
      id: randomUUID(),
      name: data.name,
      email: data.email,
      password: data.password,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.users.push(user)

    return user
  }

  async findByEmail(data: IFindUserByEmailDTO): Promise<User | null> {
    return this.users.find((user) => user.email === data.email) || null
  }
}
