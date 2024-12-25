import { User } from '@prisma/client'
import { inject, injectable } from 'tsyringe'

import { ICreateUserDTO, IUserRepositoryDTO } from '@user/dtos'
import { AppError } from '@shared/app-error'

@injectable()
export class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepositoryDTO,
  ) {}

  async execute(data: ICreateUserDTO): Promise<User> {
    const user = await this.userRepository.findByEmail({ email: data.email })

    if (user) {
      throw new AppError('Email já cadastrado', 400)
    }

    return this.userRepository.create(data)
  }
}
