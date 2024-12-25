import { Router } from 'express'

import { userRoutes } from '@user/routes'
import { walletRoutes } from '@wallet/routes'

export const routes = Router()

routes.use('/user', userRoutes)

routes.use('/wallet', walletRoutes)
