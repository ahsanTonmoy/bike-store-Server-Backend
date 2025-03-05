"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
const zod_1 = require("zod");
exports.orderSchema = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email address"),
    product: zod_1.z.string().regex(/^[a-fA-F0-9]{24}$/, "Invalid product ID"),
    quantity: zod_1.z.number().int().positive("Quantity must be a positive integer"),
    //   totalPrice: z.number().min(0, "Total price must be a positive number"),
});
