import { type NextFunction, type Request, type Response } from 'express'
import { inputProductValidation } from '../validations/product.validation'
export const getAllProddcuts = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  try {
    // res.status(200).json({ message: 'Products' })
    const data = [
      {
        id: 1,
        name: 'keyboard',
        qty: 90
      },
      {
        id: 1,
        name: 'keyboard',
        qty: 90
      },
      {
        id: 1,
        name: 'keyboard',
        qty: 90
      },
      {
        id: 1,
        name: 'keyboard',
        qty: 90
      },
      {
        id: 1,
        name: 'keyboard',
        qty: 90
      }
    ]
    return res.status(200).json({
      error: null,
      message: 'success',
      data: data
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
