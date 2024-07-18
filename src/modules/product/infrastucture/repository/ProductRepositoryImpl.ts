import { Either, right, left } from 'fp-ts/lib/Either'
import { Product } from '../../application/entities/Product'
import { ProductRepository } from '../../application/repository/ProductRepository'
import { AppError } from '../../../../core/error/AppError'

export class ProductRepositoryImpl implements ProductRepository {
  async getAllProducts(): Promise<Either<AppError, Product[]>> {
    try {
      const products = [
        { id: 1, name: 'Product 1', price: 9 },
        { id: 2, name: 'Product 2', price: 9 }
      ]
      return right(products)
    } catch (error) {
      return left(new AppError('Failed to retrieve products'))
    }
  }
}
