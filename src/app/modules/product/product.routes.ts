import express from 'express'
import { productController } from './product.controlar'

const router = express.Router()
router.post('/products', productController.createProduct)
router.get('/products', productController.getAllProducts)
router.get('/products/:id', productController.getProductById)
router.put('/products/:id', productController.updateProduct)
router.delete('/products/:id', productController.deleteProduct)

export const productRoutes = router
