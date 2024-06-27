// console.log('hallo dunia baru')
import express, { type Application } from 'express'
import 'dotenv/config'

const app: Application = express()
const port: number =
  process.env.PORT != null ? parseInt(process.env.PORT) : 3000

app.listen(port, () => {
  console.log(`Restapi IGR listerning on http://localhost:${port}`)
})
