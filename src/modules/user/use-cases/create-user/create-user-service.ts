import { User } from "@prisma/client";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO, IUserRepositoryDTO } from "@user/dtos";

@injectable()
export class CreateUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepositoryDTO
  ) {}

  async execute(data: ICreateUserDTO): Promise<User> {
    return this.userRepository.create(data);
  }
}