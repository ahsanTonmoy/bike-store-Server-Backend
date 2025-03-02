import { z } from "zod";

export const orderSchema = z.object({
  email: z.string().email("Invalid email address"),
  product: z.string().regex(/^[a-fA-F0-9]{24}$/, "Invalid product ID"),
  quantity: z.number().int().positive("Quantity must be a positive integer"),
  //   totalPrice: z.number().min(0, "Total price must be a positive number"),
});
