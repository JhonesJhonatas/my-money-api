import { PrismaClient, Wallet } from '@prisma/client'

import { ICreateWalletDTO, IWalletRepositoryDTO } from '@wallet/dtos'

export class WalletRepository implements IWalletRepositoryDTO {
  private readonly prisma: PrismaClient = new PrismaClient()

  async create(data: ICreateWalletDTO): Promise<Wallet> {
    return await this.prisma.wallet.create({ data })
  }
}
