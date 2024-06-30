import { Router } from 'express'
import {
  getAllProddcuts,
  insertProduct
} from '../controllers/product.controller'

const productRouter = Router()

productRouter.get('/product', getAllProddcuts)

productRouter.post('/product', insertProduct)

export default productRouter
