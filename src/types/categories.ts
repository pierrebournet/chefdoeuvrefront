import { Product } from '../types/Product';

export interface Category {
  id: number;
  name: string;
}

export const categories: Category[] = [
  { id: 1, name: 'Café' },
  { id: 2, name: 'Thé' },
  { id: 3, name: 'Bubble Tea' },
  { id: 4, name: 'Shake' },
];

  