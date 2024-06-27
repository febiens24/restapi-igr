// console.log('hallo dunia baru')
import express, {
  type Request,
  type Application,
  type NextFunction
} from 'express'
import 'dotenv/config'

const app: Application = express()
const port: number =
  process.env.PORT != null ? parseInt(process.env.PORT) : 3000

app.listen(port, () => {
  console.log(`Porto IGR listerning on http://localhost:${port}`)
})
