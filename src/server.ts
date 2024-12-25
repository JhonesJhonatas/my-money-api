import 'dotenv/config'
import 'reflect-metadata'
import 'express-async-errors'
import express, { Express, Request, Response } from 'express'

import '@infra/container'

import { routes } from '@infra/routes'
import { AppError } from '@shared/app-error'

const app: Express = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(routes)

app.use((err: Error, request: Request, response: Response) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    })
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  })
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
