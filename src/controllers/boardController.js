import { StatusCodes } from 'http-status-codes'


const createNew = async (req, res, next) => {
  try {
    res.status(StatusCodes.CREATED).json({ message: 'api post from controller' })
  } catch (e) {
    next(e)
  }
}

export const boardController = { createNew }