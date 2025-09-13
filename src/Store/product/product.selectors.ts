import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

export const selectProductState = createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(
  selectProductState,
  (state) => state.products
);

export const selectSelectedCategory = createSelector(
  selectProductState,
  (state) => state.selectedCategory
);

export const selectFilteredProducts = createSelector(
  selectAllProducts,
  selectSelectedCategory,
  (products, category) => {
    if (category === 'all') return products;
    return products.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }
);
