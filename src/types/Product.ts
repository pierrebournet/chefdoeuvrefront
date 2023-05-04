import { Category } from "./categories";
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    categoryId: number;
    imageUrl: string;
    imageHoverUrl: string;
  }

  export interface NewProduct {
    name: string;
    description: string;
    price: number;
    categoryId: number;
    imageUrl: string;
    imageHoverUrl: string;
  }
  
  
  