export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  dimensions: {
    width: number;
    height: number;
    unit: string;
  };
  inStock: boolean;
  createdAt: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category = {
  id: string;
  name: string;
  description: string;
};
