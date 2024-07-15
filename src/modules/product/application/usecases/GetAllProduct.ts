import { injectable, inject } from 'inversify'
import { Either } from 'fp-ts/lib/Either'
import { ProductRepository } from '../repository/ProductRepository'
import { AppError } from '../../../../core/error/Error'
import { Product } from '../entities/Product'

@injectable()
export class GetAllProductUseCase {
  private readonly productRepository: ProductRepository

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository
  }

  async getContacts(): Promise<Either<String, Product[]>> {
    const response = await this.productRepository.getAllProducts()
    return response
  }
}
