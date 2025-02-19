import { Product } from './product.interface'
import productModel from './product.model'

//create product
const createProduct = async (product: Product) => {
  const result = await productModel.create(product)
  return result
}

// get product

const getproducts = async () => {
  const result = await productModel.find()
  return result
}

export const productServices = {
  createProduct,
  getproducts,
}
