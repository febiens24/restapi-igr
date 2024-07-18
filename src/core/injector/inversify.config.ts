import 'reflect-metadata'
import { Container } from 'inversify'
import { ProductRepository } from '../../modules/product/application/repository/ProductRepository'
import { ProductRepositoryImpl } from '../../modules/product/infrastucture/repository/ProductRepositoryImpl'
import { GetProducts } from '../../modules/product/application/usecases/GetAllProduct'
import { ProductController } from '../../modules/product/infrastucture/controller/ProductController'
import { ProductAdapter } from '../../modules/product/infrastucture/adapter/ProductAdapter'
import { TYPES } from './identifier'

// Define the DI container
const container = new Container()

// Bind interfaces to implementations
container
  .bind<ProductRepository>(TYPES.ProductRepository)
  .to(ProductRepositoryImpl)
container.bind<GetProducts>(TYPES.GetProducts).to(GetProducts)
container.bind<ProductController>(TYPES.ProductController).to(ProductController)
container.bind<ProductAdapter>(TYPES.ProductAdapter).to(ProductAdapter) // Add this binding

export { container }
