"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const zod_1 = require("zod");
exports.productSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"),
    brand: zod_1.z.string().min(1, "Brand is required"),
    price: zod_1.z.number().min(0, "Price must be a positive number"),
    category: zod_1.z.enum(["Mountain", "Road", "Hybrid", "Electric"], {
        errorMap: () => ({
            message: "Invalid category. Must be Mountain, Road, Hybrid, or Electric",
        }),
    }),
    description: zod_1.z
        .string()
        .min(10, "Description must be at least 10 characters long"),
    quantity: zod_1.z.number().int().min(0, "Quantity must be a positive integer"),
    inStock: zod_1.z.boolean(),
});
