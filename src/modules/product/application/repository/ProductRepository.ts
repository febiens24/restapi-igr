import { Either } from 'fp-ts/lib/Either'
import { AppError } from '../../../../core/error/AppError'
import { Product } from '../entities/Product'

export interface ProductRepository {
  getAllProducts(): Promise<Either<AppError, Product[]>>
}
