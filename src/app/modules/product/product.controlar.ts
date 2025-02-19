import { Request, Response } from 'express'
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
      message: 'Bike created successfully',
      success: true,
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

export const productontrolers = {
  createProduct,
  allProducts,
}
