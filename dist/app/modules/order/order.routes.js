"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controlar_1 = require("./order.controlar");
const errorHandler_1 = require("../../middleware/errorHandler");
const orderValidation_1 = require("./orderValidation");
const router = express_1.default.Router();
// post router for orders
router.post('/orders', (0, errorHandler_1.errorHandler)(orderValidation_1.orderSchema), order_controlar_1.orderControlar.createOrder);
//get router for orders
router.get('/orders', order_controlar_1.orderControlar.getOrder);
// New route to calculate total revenue
router.get('/orders/revenue', order_controlar_1.orderControlar.getTotalRevenue);
//
exports.orderRoutes = router;
