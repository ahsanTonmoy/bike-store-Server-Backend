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
        const result = yield product_service_1.productServices.getproducts();
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
exports.productontrolers = {
    createProduct,
    allProducts,
};
