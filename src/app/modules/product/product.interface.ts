enum BikeCategory {
  Mountain = 'Mountain',
  Road = 'Road',
  Hybrid = 'Hybrid',
  Electric = 'Electric',
}

export type Product = {
  name: string
  brand: string
  price: number
  category: BikeCategory
  description: string
  quantity: number
  inStock: boolean
}
