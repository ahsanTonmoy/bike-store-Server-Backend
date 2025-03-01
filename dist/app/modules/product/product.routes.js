"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controlar_1 = require("./product.controlar");
const router = express_1.default.Router();
//
router.post('/products', product_controlar_1.productControlers.createProduct);
//
router.get('/products', product_controlar_1.productControlers.allProducts);
//
router.get('/products/:productId', product_controlar_1.productControlers.getProductById);
//
router.put('/products/:productId', product_controlar_1.productControlers.updateProduct);
//
router.delete('/products/:productId', product_controlar_1.productControlers.deleteProduct);
exports.productsRoutes = router;
