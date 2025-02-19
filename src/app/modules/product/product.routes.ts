import express from 'express'
import { productontrolers } from './product.controlar'

const router = express.Router()

// Create a new product
router.post('/products', productontrolers.createProduct)
// Get all products
router.get('/products', productontrolers.allProducts)
// Get a single product by ID

// Update a product by ID

// Delete a product by ID

export const productRoutes = router
