import { User } from '@prisma/client'

import { ICreateUserDTO } from '@user/dtos/i-create-user-dto'
import { IFindUserByEmailDTO } from '@user/dtos/i-find-user-by-email'

export interface IUserRepositoryDTO {
  create(data: ICreateUserDTO): Promise<User>
  findByEmail(data: IFindUserByEmailDTO): Promise<User | null>
}
