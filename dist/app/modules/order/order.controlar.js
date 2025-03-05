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
exports.orderControlar = exports.getTotalRevenue = void 0;
const order_services_1 = require("./order.services");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield order_services_1.orderServices.createOrder(req.body);
        //
        res.status(201).json({
            message: 'Order created successfully',
            success: true,
            data: order,
        });
    }
    catch (error) {
        res.status(400).json({ message: 'not create', error });
    }
});
//
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_services_1.orderServices.getAllOrders();
        res.status(201).json({
            massege: 'Oreder retrieved successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({ message: 'not find', error });
    }
});
//
const getTotalRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const revenue = yield order_services_1.orderServices.calculateTotalRevenue();
        res.status(201).json({
            massege: 'Revenue calculated successfully',
            success: true,
            data: { totalRevenue: revenue },
        });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.getTotalRevenue = getTotalRevenue;
//
exports.orderControlar = {
    createOrder,
    getOrder,
    getTotalRevenue: exports.getTotalRevenue,
};
