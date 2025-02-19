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
exports.productontrolers = void 0;
const product_service_1 = require("./product.service");
// post a data
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // body
        const { product: productData } = req.body;
        //   func
        const result = yield product_service_1.productServices.createProduct(productData); //
        //
        res.status(200).json({
            message: 'Bike created successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
// get all data
const allProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        const result = yield product_service_1.productServices.getproducts(searchTerm);
        //
        res.status(200).json({
            message: 'List of our bike',
            success: true,
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        // Call the service to get the product by ID
        const product = yield product_service_1.productServices.getProductById(productId);
        if (!product) {
            return res.status(404).json({
                message: 'Product not found',
                success: false,
            });
        }
        res.status(200).json({
            message: 'Find product successfully',
            success: true,
            data: product,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.productontrolers = {
    createProduct,
    allProducts,
    getProductById,
};
