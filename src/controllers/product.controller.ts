import { type NextFunction, type Request, type Response } from 'express'
import { inputProductValidation } from '../core/validations/product.validation'
import { query } from '../core/db/index'

export const getAllProddcuts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const products = await query('SELECT * from res_users')
    return res.status(200).json({
      error: null,
      message: 'success',
      data: products.rows
    })
  } catch (error: Error | any) {
    next(new Error('Error /controller/product.controller.ts :' + error.message))
  }
}

export const insertProduct = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  try {
    const { error, value } = inputProductValidation(req.body)
    if (error != null) {
      return res.status(400).json({
        error: error.details[0].message,
        message: 'Input Product Failure',
        data: value
      })
    }
    res.status(200).json({
      error: null,
      message: 'Input Product Success',
      data: value
    })
  } catch (error: Error | any) {
    next(new Error('Error /controller/product.controller.ts :' + error.message))
  }
}
