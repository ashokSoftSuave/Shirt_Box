export interface Product {
  id: number;
  productName: string;
  price: number;
  category: string;
  image: string;
  favourite?: boolean;
  bag: boolean;
  qty?: number; // Optional: quantity for cart
}
