import express from 'express'
import { productController } from './product.controlar'
import { errorHandler } from '../../middleware/errorHandler'
import { productSchema } from './product.validetion'

const router = express.Router()
router.post(
  '/products',
  errorHandler(productSchema),
  productController.createProduct,
)
router.get('/products', productController.getAllProducts)
router.get('/products/:id', productController.getProductById)
router.put('/products/:id', productController.updateProduct)
router.delete('/products/:id', productController.deleteProduct)

export const productRoutes = router
