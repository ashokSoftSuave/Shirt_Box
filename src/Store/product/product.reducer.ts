// store/product.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { loadProducts, setCategoryFilter } from './product.actions';
import { Product } from '../../model/product.model';

export interface ProductState {
  products: Product[];
  selectedCategory: string;
}

export const initialState: ProductState = {
  products: [],
  selectedCategory: 'all',
};

export const productReducer = createReducer(
  initialState,
  on(loadProducts, (state, { products }) => ({
    ...state,
    products,
  })),
  on(setCategoryFilter, (state, { category }) => ({
    ...state,
    selectedCategory: category,
  }))
);
