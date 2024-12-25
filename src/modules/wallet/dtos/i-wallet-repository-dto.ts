import { Wallet } from '@prisma/client'

import { ICreateWalletDTO } from '@wallet/dtos/i-create-wallet-dto'

export interface IWalletRepositoryDTO {
  create(data: ICreateWalletDTO): Promise<Wallet>
}
