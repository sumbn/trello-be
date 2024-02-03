
import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict(),
    des: Joi.string().required().min(3).max(50).trim().strict()
  })

  try {
    // console.log('req:', req.body)

    await correctCondition.validateAsync(req.body, { abortEarly: false })

    next()

  } catch (e) {
    // console.log(e)
    // console.log(new Error(e))
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      error_message : new Error(e).message
    })
  }
}
export const boardValidation = { createNew }