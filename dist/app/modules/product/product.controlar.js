"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_service_1 = require("./product.service");
// create products
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_service_1.productService.createProduct(req.body);
        res.status(201).json({
            message: 'Bike created successfully',
            success: true,
            data: product,
        });
    }
    catch (error) {
        res.status(400).json({ message: 'product not create', error });
    }
});
//  get all products
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        const products = yield product_service_1.productService.getAllProducts(searchTerm);
        res.status(201).json({
            message: 'Bikes retrieved successfully',
            success: true,
            data: products,
        });
    }
    catch (error) {
        res.status(400).json({ message: 'product no create', error });
    }
});
// find product by id
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_service_1.productService.getProductById(req.params.id);
    return product
        ? res.status(201).json({
            message: 'Bikes retrieved successfully',
            success: true,
            data: product,
        })
        : res.status(404).json({ message: 'Product not found' });
});
//  update product
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_service_1.productService.updateProduct(req.params.id, req.body);
    return product
        ? res.json({
            massege: 'Bike updated successfully',
            success: true,
            data: product,
        })
        : res.status(404).json({ message: 'Product not found' });
});
//  delete a product
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedProduct = yield product_service_1.productService.deleteProduct(req.params.id);
    return deletedProduct
        ? res.status(200).json({
            message: 'Bike deleted successfully',
            success: true,
            data: deletedProduct,
        })
        : res.status(404).json({ message: 'Product not found' });
});
exports.productController = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
