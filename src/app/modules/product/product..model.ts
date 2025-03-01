import mongoose, { Schema } from 'mongoose'
import { Product } from './product.interface'

const ProductSchema: Schema = new Schema<Product>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ['Mountain', 'Road', 'Hybrid', 'Electric'],
    required: true,
  },
  description: { type: String, required: true },
  quantity: { type: Number, required: true, min: 0 },
  inStock: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
})

export const productModel = mongoose.model<Product>('products', ProductSchema)
