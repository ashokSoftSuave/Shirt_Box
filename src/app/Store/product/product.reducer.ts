import { createReducer, on } from '@ngrx/store';
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
  showWishlist,
  hideWishlist,
  addToBag,
  removeFromBag,
  incrementBagQty,
  decrementBagQty,
  setBagQty
} from '../../Store/product/product.actions';
import { Product } from '../../models/product.model';

export interface ProductState {
  products: Product[];
  selectedCategory: string;
  searchTerm: string;
  priceRange: [number, number] | null;
  color: string | null;
  tag: string | null;
  sortBy: SortByType;
  showWishlist: boolean;
}

export const initialState: ProductState = {
  products: [],
  selectedCategory: 'all',
  searchTerm: '',
  priceRange: null,
  color: null,
  tag: null,
  sortBy: 'default',
  showWishlist: false
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
  on(showWishlist, (s) => ({ ...s, showWishlist: true })),
  on(hideWishlist, (s) => ({ ...s, showWishlist: false })),
  on(addToBag, (s, { productId, qty }) => {
    const updatedProducts = s.products.map(product =>
      product.id === productId ? { ...product, bag: true, qty } : product
    );
    return { ...s, products: updatedProducts };
  }),
  on(removeFromBag, (s, { productId }) => {
    const updatedProducts = s.products.map(product =>
      product.id === productId ? { ...product, bag: false, qty: 0 } : product
    );
    return { ...s, products: updatedProducts };
  }),
  on(incrementBagQty, (s, { productId }) => {
    const updatedProducts = s.products.map(product =>
      product.id === productId && product.bag
        ? { ...product, qty: (product.qty ?? 1) + 1 }
        : product
    );
    return { ...s, products: updatedProducts };
  }),
  on(decrementBagQty, (s, { productId }) => {
    const updatedProducts = s.products.map(product =>
      product.id === productId && product.bag && (product.qty ?? 1) > 1
        ? { ...product, qty: (product.qty ?? 1) - 1 }
        : product
    );
    return { ...s, products: updatedProducts };
  }),
  on(setBagQty, (s, { productId, qty }) => {
    const updatedProducts = s.products.map(product =>
      product.id === productId && product.bag
        ? { ...product, qty }
        : product
    );
    return { ...s, products: updatedProducts };
  })
);
