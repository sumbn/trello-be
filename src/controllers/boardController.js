import { StatusCodes } from 'http-status-codes'


const createNew = async (req, res, next) => {
  try {
    console.log('req:', req.body)
    console.log('query:', req.query)
    res.status(StatusCodes.CREATED).json({ message: 'api post from controller' })
    // throw new Error('sumbn')
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error_message : e.message
    })
  }
}

export const boardController = { createNew }