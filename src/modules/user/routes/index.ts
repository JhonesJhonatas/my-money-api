import { Router } from 'express'

import { CreateUserController } from '@user/use-cases/create-user/create-user-controller'
import { createUserValidation } from '@user/use-cases/create-user/create-user-validation'

export const userRoutes = Router()

userRoutes.post(
  '/create',
  createUserValidation,
  new CreateUserController().handle,
)
