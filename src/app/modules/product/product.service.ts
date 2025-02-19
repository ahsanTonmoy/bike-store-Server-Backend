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

//
// Get a specific product by ID
const getProductById = async (productId: string) => {
  const product = await productModel.findById(productId)

  return product
}

// Update a product
const updateProduct = async (productId: string, updates: Partial<Product>) => {
  const updatedProduct = await productModel.findByIdAndUpdate(
    productId,
    updates,
    {
      new: true,
    },
  )

  return updatedProduct
}

export const productServices = {
  createProduct,
  getproducts,
  getProductById,
  updateProduct,
}
