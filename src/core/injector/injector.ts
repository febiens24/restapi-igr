import 'reflect-metadata'
import { Container } from 'inversify'
import { ProductRepository } from '../../modules/product/application/repository/ProductRepository'
import { GetAllProductUseCase } from '../../modules/product/application/usecases/GetAllProduct'

const container = new Container()

container.bind<GetAllProductUseCase>('productRepository')
// container.bind<ProductRepository>('ProductRepository').to(ProductRepositoryImpl)

export { container }
