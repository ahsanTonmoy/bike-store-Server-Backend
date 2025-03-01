import mongoose from 'mongoose'
import { Order } from './order.interface'
import { productModel } from '../product/product..model'
import { orderModel } from './order.models'
// create orders
const createOrder = async (orderData: Order) => {
  const session = await mongoose.startSession()
  session.startTransaction()

  try {
    // Find product and lock it for update
    const product = await productModel
      .findById(orderData.product)
      .session(session)
    if (!product) {
      throw new Error('Product not found')
    }

    // Check stock availability
    if (product.quantity < orderData.quantity) {
      throw new Error(`Insufficient stock. Only ${product.quantity} left.`)
    }

    // Calculate total price product quantity
    const totalPrice = product.price * orderData.quantity

    // Create the orderMOdel
    const order = await orderModel.create(
      [
        {
          email: orderData.email,
          product: orderData.product,
          quantity: orderData.quantity,
          totalPrice,
        },
      ],
      { session },
    )

    // Update inventory
    const Quantity = product.quantity - orderData.quantity
    const inStock = Quantity > 0

    await productModel.findByIdAndUpdate(
      orderData.product,
      {
        quantity: Quantity,
        inStock: inStock,
      },
      { session },
    )

    // Commit transaction
    await session.commitTransaction()
    session.endSession()

    return order[0]
  } catch (error) {
    await session.abortTransaction()
    session.endSession()
    throw error
  }
}

export const getAllOrders = async () => {
  const orders = await orderModel.find()
  return orders
}

//
const calculateTotalRevenue = async () => {
  const result = await orderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ])

  return result.length > 0 ? result[0].totalRevenue : 0
}

export const orderServices = {
  createOrder,
  getAllOrders,
  calculateTotalRevenue,
}
