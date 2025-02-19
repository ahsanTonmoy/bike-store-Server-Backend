import { Product } from './product.interface'
import productModel from './product.model'

//create product
const createProduct = async (product: Product) => {
  const result = await productModel.create(product)
  return result
}

// get product

const getproducts = async (searchTerm?: string) => {
  let query = {}
  if (searchTerm) {
    query = {
      $or: [
        { name: new RegExp(searchTerm, 'i') },
        { brand: new RegExp(searchTerm, 'i') },
        { category: new RegExp(searchTerm, 'i') },
      ],
    }
  }

  const products = await productModel.find(query)
  return products
}

export const productServices = {
  createProduct,
  getproducts,
}
