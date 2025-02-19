"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_routes_1 = require("./app/modules/product/product.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//
app.use('/api', product_routes_1.productRoutes);
app.use('/api', product_routes_1.productRoutes);
//
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Bike store server is on',
        success: true,
    });
});
app.get('/test', (req, res) => {
    res.send('bike server is on test');
});
exports.default = app;
