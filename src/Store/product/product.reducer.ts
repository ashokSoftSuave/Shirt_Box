import { createReducer, on } from '@ngrx/store';
import { Product } from '../../model/product.model';
import {
  loadProducts,
  setCategoryFilter,
  setSearchTerm,
  setPriceRange,
  setColorFilter,
  setTagFilter,
  setSortBy,
  clearFilters,
  SortByType,
  toggleFavorite,
  showLikedItems,
} from './product.actions';

export interface ProductState {
  products: Product[];
  selectedCategory: string;
  searchTerm: string;
  priceRange: [number, number] | null;
  color: string | null;
  tag: string | null;
  sortBy: SortByType;
}

export const initialState: ProductState = {
  products: [],
  selectedCategory: 'all',
  searchTerm: '',
  priceRange: null,
  color: null,
  tag: null,
  sortBy: 'default',
};

export const productReducer = createReducer(
  initialState,
  on(loadProducts, (s, { products }) => ({ ...s, products })),
  on(setCategoryFilter, (s, { category }) => ({ ...s, selectedCategory: category })),
  on(setSearchTerm, (s, { term }) => ({ ...s, searchTerm: term })),
  on(setPriceRange, (s, { range }) => ({ ...s, priceRange: range })),
  on(setColorFilter, (s, { color }) => ({ ...s, color })),
  on(setTagFilter, (s, { tag }) => ({ ...s, tag })),
  on(setSortBy, (s, { sortBy }) => ({ ...s, sortBy })),
  on(clearFilters, (s) => ({
    ...s,
    selectedCategory: 'all',
    searchTerm: '',
    priceRange: null,
    color: null,
    tag: null,
    sortBy: 'default'as const ,
  })),
  on(toggleFavorite, (s, { productId }) => {
    const updatedProducts = s.products.map(product =>
      product.id === productId ? { ...product, favourite: !product.favourite } : product
    );
    return { ...s, products: updatedProducts };
  }),
  on(showLikedItems, (s) => {
    const likedProducts = s.products.filter(product => product.favourite);
    return { ...s, products: likedProducts };
  })
);
