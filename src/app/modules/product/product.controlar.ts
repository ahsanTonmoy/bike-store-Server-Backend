import { NextFunction, Request, Response } from 'express'
import { productServices } from './product.service'

// post a data
const createProduct = async (req: Request, res: Response) => {
  try {
    // body
    const { product: productData } = req.body
    //   func
    const result = await productServices.createProduct(productData) //
    //
    res.status(200).json({
      message: 'Bike created successfully',
      success: true,
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

// get all data
const allProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string

    const result = await productServices.getproducts(searchTerm)
    //
    res.status(200).json({
      message: 'List of our bike',
      success: true,
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productId } = req.params

    // Call the service to get the product by ID
    const product = await productServices.getProductById(productId)

    if (!product) {
      return res.status(404).json({
        message: 'Product not found',
        success: false,
      })
    }

    res.status(200).json({
      message: 'Find product successfully',
      success: true,
      data: product,
    })
  } catch (error) {
    next(error)
  }
}

export const productontrolers = {
  createProduct,
  allProducts,
  getProductById,
}
