import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { boardRoute } from './boardRoute'
import { columnRoute } from './columnRoute'
import { cardRoute } from './cardRoute'

const Router = express.Router()


Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'api v1 alredy' })
})

Router.use('/board', boardRoute)

Router.use('/columns', columnRoute)

Router.use('/cards', cardRoute)

export const boardIndex = Router