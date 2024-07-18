import { Request, Response } from 'express'
import { inject, injectable } from 'inversify'
import { ProductController } from '../controller/ProductController'
import { TYPES } from '@core/injector/identifier'

@injectable()
export class ProductAdapter {
  private productController: ProductController

  constructor(
    @inject(TYPES.ProductController) productController: ProductController
  ) {
    this.productController = productController
  }

  public getProducts(req: Request, res: Response): void {
    this.productController.getProducts(req, res)
  }
}
