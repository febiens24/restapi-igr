import { injectable, inject } from 'inversify'
import { Either } from 'fp-ts/Either'
import { ProductRepository } from '../repository/ProductRepository'
import { Product } from '../entities/Product'
import { AppError } from '../../../../core/error/AppError'
import { TYPES } from '@core/injector/identifier'

@injectable()
export class GetProducts {
  private productRepository: ProductRepository

  constructor(
    @inject(TYPES.ProductRepository) productRepository: ProductRepository
  ) {
    this.productRepository = productRepository
  }

  public async execute(): Promise<Either<AppError, Product[]>> {
    return this.productRepository.getAllProducts()
  }
}
