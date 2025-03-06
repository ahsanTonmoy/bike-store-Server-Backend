import express from 'express'
import { orderControlar } from './order.controlar'
import { errorHandler } from '../../middleware/errorHandler'
import { orderSchema } from './orderValidation'
const router = express.Router()
// post router for orders
router.post('/orders', errorHandler(orderSchema), orderControlar.createOrder)
//get router for orders
router.get('/orders', orderControlar.getOrder)
// New route to calculate total revenue
router.get('/orders/revenue', orderControlar.getTotalRevenue)

//
export const orderRoutes = router
