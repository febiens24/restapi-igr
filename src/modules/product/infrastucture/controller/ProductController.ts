import { Request, Response } from 'express'
import { inject, injectable } from 'inversify'
import { match } from 'fp-ts/Either'
import { GetProducts } from '../../application/usecases/GetAllProduct'
import { Injector } from '../../../../core/injector/injector'
import { AppError } from '../../../../core/error/AppError'
import { TYPES } from '@core/injector/identifier'

@injectable()
export class ProductController {
  private getProductsUseCase: GetProducts

  constructor(@inject(TYPES.GetProducts) getProductsUseCase: GetProducts) {
    this.getProductsUseCase = getProductsUseCase
  }

  public async getProducts(req: Request, res: Response): Promise<void> {
    const result = await this.getProductsUseCase.execute()
    match(
      (error: AppError) => Injector.injectError(error, req, res),
      (products: any) => res.json(products)
    )(result)
  }
}
