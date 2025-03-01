import express, { Request, Response } from 'express'
import cors from 'cors'
import { productRoutes } from './app/modules/product/product.routes'
import { orderRoutes } from './app/modules/order/order.routes'
const app = express()

app.use(express.json())
app.use(cors())
//
app.use('/api', productRoutes)
app.use('/api', orderRoutes)
//
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Bike store server is on ',
    success: true,
  })
})

export default app
