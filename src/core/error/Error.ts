import { StatusCodes } from 'http-status-codes'
import { Either, left } from 'fp-ts/lib/Either'

export class AppError {
  constructor(
    public readonly message: string,
    public readonly status: number
  ) {}

  static internalServerError(message: string): Either<AppError, never> {
    return left(new AppError(message, StatusCodes.INTERNAL_SERVER_ERROR))
  }

  static badRequest(message: string): Either<AppError, never> {
    return left(new AppError(message, StatusCodes.BAD_REQUEST))
  }

  static notFound(message: string): Either<AppError, never> {
    return left(new AppError(message, StatusCodes.NOT_FOUND))
  }

  static unauthorized(message: string): Either<AppError, never> {
    return left(new AppError(message, StatusCodes.UNAUTHORIZED))
  }
}
