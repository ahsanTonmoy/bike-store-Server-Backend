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
exports.productService = void 0;
const product__model_1 = require("./product..model");
// create a product
const createProduct = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product__model_1.productModel.create(productData);
});
// get all products & search
const getAllProducts = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {};
    if (searchTerm) {
        query = {
            $or: [
                { name: new RegExp(searchTerm, 'i') },
                { brand: new RegExp(searchTerm, 'i') },
                { category: new RegExp(searchTerm, 'i') },
            ],
        };
    }
    const products = yield product__model_1.productModel.find(query);
    return products;
});
// find product by id
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product__model_1.productModel.findById(id);
});
// update product
const updateProduct = (id, productData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product__model_1.productModel.findByIdAndUpdate(id, productData, { new: true });
});
// delete a product
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product__model_1.productModel.findByIdAndDelete(id);
});
exports.productService = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
