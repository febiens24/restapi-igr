import { Router } from 'express'
import { container } from '../../../core/injector/inversify.config'
import { ProductAdapter } from '../infrastucture/adapter/ProductAdapter'

const productRouter = Router()
const productAdapter = container.get<ProductAdapter>(ProductAdapter)

productRouter.get('/products', (req, res) =>
  productAdapter.getProducts(req, res)
)

export default productRouter
