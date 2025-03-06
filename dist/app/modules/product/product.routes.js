"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controlar_1 = require("./product.controlar");
const errorHandler_1 = require("../../middleware/errorHandler");
const product_validetion_1 = require("./product.validetion");
const router = express_1.default.Router();
router.post('/products', (0, errorHandler_1.errorHandler)(product_validetion_1.productSchema), product_controlar_1.productController.createProduct);
router.get('/products', product_controlar_1.productController.getAllProducts);
router.get('/products/:id', product_controlar_1.productController.getProductById);
router.put('/products/:id', product_controlar_1.productController.updateProduct);
router.delete('/products/:id', product_controlar_1.productController.deleteProduct);
exports.productRoutes = router;
