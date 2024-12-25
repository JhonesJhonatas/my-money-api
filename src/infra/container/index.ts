import { container } from 'tsyringe'

import { IUserRepositoryDTO } from '@user/dtos'
import { UserRepository } from '@user/repositories/user-repository'

import { IWalletRepositoryDTO } from '@wallet/dtos'
import { WalletRepository } from '@wallet/repositories/wallet-repository'

container.registerSingleton<IUserRepositoryDTO>(
  'UserRepository',
  UserRepository,
)

container.registerSingleton<IWalletRepositoryDTO>(
  'WalletRepository',
  WalletRepository,
)
