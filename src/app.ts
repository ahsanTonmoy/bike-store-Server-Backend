import express, { Request, Response } from 'express'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())
//
// app.use('/api', productsRoutes)
// app.use('/api', orderRoutes)
//
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Bike store server is on v2',
    success: true,
  })
})
app.get('/test', (req: Request, res: Response) => {
  res.send('bike server is on test')
})

export default app
