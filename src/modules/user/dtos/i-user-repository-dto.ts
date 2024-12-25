import { User } from "@prisma/client";

import { ICreateUserDTO } from "@user/dtos/i-create-user-dto";

export interface IUserRepositoryDTO {
  create(data: ICreateUserDTO): Promise<User>;
}