import 'reflect-metadata'
import { container } from './inversify.config'
import { GetProducts } from '../../modules/product/application/usecases/GetAllProduct'

async function main() {
  const getProducts = container.get<GetProducts>(GetProducts)
  const result = await getProducts.execute()
  console.log(result)
}

main().catch((error) => console.error(error))
