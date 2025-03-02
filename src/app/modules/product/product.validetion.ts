import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  brand: z.string().min(1, "Brand is required"),
  price: z.number().min(0, "Price must be a positive number"),
  category: z.enum(["Mountain", "Road", "Hybrid", "Electric"], {
    errorMap: () => ({
      message: "Invalid category. Must be Mountain, Road, Hybrid, or Electric",
    }),
  }),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters long"),
  quantity: z.number().int().min(0, "Quantity must be a positive integer"),
  inStock: z.boolean(),
});
