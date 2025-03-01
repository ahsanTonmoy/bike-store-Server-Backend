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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderServices = exports.getAllOrders = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const product__model_1 = require("../product/product..model");
const order_models_1 = require("./order.models");
// create orders
const createOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield mongoose_1.default.startSession();
    session.startTransaction();
    try {
        // Find product and lock it for update
        const product = yield product__model_1.productModel
            .findById(orderData.product)
            .session(session);
        if (!product) {
            throw new Error('Product not found');
        }
        // Check stock availability
        if (product.quantity < orderData.quantity) {
            throw new Error(`Insufficient stock. Only ${product.quantity} left.`);
        }
        // Calculate total price product quantity
        const totalPrice = product.price * orderData.quantity;
        // Create the orderMOdel
        const order = yield order_models_1.orderModel.create([
            {
                email: orderData.email,
                product: orderData.product,
                quantity: orderData.quantity,
                totalPrice,
            },
        ], { session });
        // Update inventory
        const Quantity = product.quantity - orderData.quantity;
        const inStock = Quantity > 0;
        yield product__model_1.productModel.findByIdAndUpdate(orderData.product, {
            quantity: Quantity,
            inStock: inStock,
        }, { session });
        // Commit transaction
        yield session.commitTransaction();
        session.endSession();
        return order[0];
    }
    catch (error) {
        yield session.abortTransaction();
        session.endSession();
        throw error;
    }
});
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield order_models_1.orderModel.find();
    return orders;
});
exports.getAllOrders = getAllOrders;
//
const calculateTotalRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_models_1.orderModel.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: '$totalPrice' },
            },
        },
    ]);
    return result.length > 0 ? result[0].totalRevenue : 0;
});
exports.orderServices = {
    createOrder,
    getAllOrders: exports.getAllOrders,
    calculateTotalRevenue,
};
