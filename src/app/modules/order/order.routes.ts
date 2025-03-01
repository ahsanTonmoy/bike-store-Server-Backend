import express from 'express'
import { orderControlar } from './order.controlar'
const router = express.Router()
// post router for orders
router.post('/orders', orderControlar.createOrder)
//get router for orders
router.get('/orders', orderControlar.getOrder)
// New route to calculate total revenue
router.get('/orders/revenue', orderControlar.getTotalRevenue)

//
export const orderRoutes = router
