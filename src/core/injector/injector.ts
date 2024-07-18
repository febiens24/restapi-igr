// Injector.ts
import { Request, Response } from 'express'
import { AppError } from '../error/AppError'

export class Injector {
  static injectError(error: AppError, req: Request, res: Response): void {
    // You can customize the error response here based on your application's requirements
    res.status(error.statusCode || 500).json({
      message: error.message || 'Internal Server Error',
      details: error.details || null
    })
  }
}
