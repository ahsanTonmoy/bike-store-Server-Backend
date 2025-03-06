import mongoose, { Schema } from 'mongoose'
import { Order } from './order.interface'

const OrderSchema: Schema = new Schema<Order>({
  email: { type: String, required: true },
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, min: 1 },
  totalPrice: { type: Number, required: false },
})

export const orderModel = mongoose.model<Order>('Order', OrderSchema)
