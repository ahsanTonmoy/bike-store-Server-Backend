import { Schema, model } from 'mongoose'
import { Product } from './product.interface'

//
const ProductSchema = new Schema<Product>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ['Mountain', 'Road', 'Hybrid', 'Electric'],
    required: true,
  },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
})

const productModel = model<Product>('productModel', ProductSchema)
export default productModel
