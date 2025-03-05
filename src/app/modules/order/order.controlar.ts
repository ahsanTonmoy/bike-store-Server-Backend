import { Request, Response } from 'express'
import { orderServices } from './order.services'

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = await orderServices.createOrder(req.body)
    //
    res.status(201).json({
      message: 'Order created successfully',
      success: true,
      data: order,
    })
  } catch (error) {
    res.status(400).json({ message: 'not create', error })
  }
}
//
const getOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.getAllOrders()
    res.status(201).json({
      massege: 'Oreder retrieved successfully',
      success: true,
      data: result,
    })
  } catch (error) {
    res.status(400).json({ message: 'not find', error })
  }
}
//
export const getTotalRevenue = async (req: Request, res: Response) => {
  try {
    const revenue = await orderServices.calculateTotalRevenue()
    res.status(201).json({
      massege: 'Revenue calculated successfully',
      success: true,
      data: { totalRevenue: revenue },
    })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
//

export const orderControlar = {
  createOrder,
  getOrder,
  getTotalRevenue,
}
