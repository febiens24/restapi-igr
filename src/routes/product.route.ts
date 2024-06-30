import { type Request, type Response, Router } from 'express'
import { inputProductValidation } from '../validations/product.validation'
import { getAllProddcuts, insertProduct } from '../controllers/product.controller';

const productRouter = Router()

productRouter.get('/product',getAllProddcuts)

productRouter.post('/product', insertProduct)

export default productRouter
