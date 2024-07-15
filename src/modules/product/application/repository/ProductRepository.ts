import { Product } from '../entities/Product'
import { Either } from 'fp-ts/lib/Either'
import { AppError } from '../../../../core/error/Error'

export interface ProductRepository {
  getAllProducts(): Promise<Either<String, Product[]>>
}
