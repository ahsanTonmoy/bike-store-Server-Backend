import { Request, Response } from 'express'
import { productService } from './product.service'

// create products
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.createProduct(req.body)
    res.status(201).json({
      message: 'Bike created successfully',
      success: true,
      data: product,
    })
  } catch (error) {
    res.status(400).json({ message: 'product not create', error })
  }
}
//  get all products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string
    const products = await productService.getAllProducts(searchTerm)
    res.status(201).json({
      message: 'Bikes retrieved successfully',
      success: true,
      data: products,
    })
  } catch (error) {
    res.status(400).json({ message: 'product no create', error })
  }
}
// find product by id
const getProductById = async (req: Request, res: Response) => {
  const product = await productService.getProductById(req.params.id)
  return product
    ? res.json(product)
    : res.status(404).json({ message: 'Product not found' })
}
//  update product
const updateProduct = async (req: Request, res: Response) => {
  const product = await productService.updateProduct(req.params.id, req.body)
  return product
    ? res.json({
        massege: 'product updated',
        data: product,
      })
    : res.status(404).json({ message: 'Product not found' })
}
//  delete a product
const deleteProduct = async (req: Request, res: Response) => {
  const product = await productService.deleteProduct(req.params.id)
  return product
    ? res.json({ message: 'Product deleted' })
    : res.status(404).json({ message: 'Product not found' })
}

export const productController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
}
