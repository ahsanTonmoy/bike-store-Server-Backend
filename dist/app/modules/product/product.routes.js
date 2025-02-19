"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controlar_1 = require("./product.controlar");
const router = express_1.default.Router();
// Create a new product
router.post('/products', product_controlar_1.productontrolers.createProduct);
// Get all products
router.get('/products', product_controlar_1.productontrolers.allProducts);
// Get a single product by ID
router.get('/products/:productId', product_controlar_1.productontrolers.getProductById);
// Update a product by ID
// Delete a product by ID
exports.productRoutes = router;
