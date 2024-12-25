import { Wallet } from '@prisma/client'

import { ICreateWalletDTO, IWalletRepositoryDTO } from '@wallet/dtos'

export class FakeWalletRepository implements IWalletRepositoryDTO {
  private wallets: Wallet[] = []

  async create(data: ICreateWalletDTO): Promise<Wallet> {
    const wallet = {
      id: '1',
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    this.wallets.push(wallet)

    return wallet
  }
}
