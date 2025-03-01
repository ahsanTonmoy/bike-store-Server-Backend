import { productModel } from './product..model'
import { Product } from './product.interface'

// create a product
const createProduct = async (productData: Product) => {
  return await productModel.create(productData)
}
// get all products & search
const getAllProducts = async (searchTerm?: string) => {
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

// find product by id
const getProductById = async (id: string) => {
  return await productModel.findById(id)
}
// update product
const updateProduct = async (id: string, productData: Partial<Product>) => {
  return await productModel.findByIdAndUpdate(id, productData, { new: true })
}
// delete a product
const deleteProduct = async (id: string) => {
  return await productModel.findByIdAndDelete(id)
}

export const productService = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
}
