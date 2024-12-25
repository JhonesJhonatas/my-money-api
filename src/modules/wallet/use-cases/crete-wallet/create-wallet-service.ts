import { inject, injectable } from 'tsyringe'
import { Wallet } from '@prisma/client'

import { ICreateWalletDTO, IWalletRepositoryDTO } from '@wallet/dtos'

@injectable()
export class CreateWalletService {
  constructor(
    @inject('WalletRepository')
    private readonly walletRepository: IWalletRepositoryDTO,
  ) {}

  async execute(data: ICreateWalletDTO): Promise<Wallet> {
    return await this.walletRepository.create(data)
  }
}
