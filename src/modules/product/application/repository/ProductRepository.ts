import { Product } from '../entities/Product'
import { Either } from 'fp-ts/lib/Either'

export interface ProductRepository {
  getAllProducts(): Promise<Either<string, Product[]>>
}
