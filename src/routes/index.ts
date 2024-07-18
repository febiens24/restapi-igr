import { Router } from 'express'
import productRouter from '../modules/product/routes/product.route'

const app = Router()

app.use('/api', productRouter)
export default app
