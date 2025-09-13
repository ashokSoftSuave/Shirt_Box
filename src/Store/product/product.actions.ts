export const incrementBagQty = createAction(
  '[Product] Increment Bag Qty',
  props<{ productId: number }>()
);

export const decrementBagQty = createAction(
  '[Product] Decrement Bag Qty',
  props<{ productId: number }>()
);

export const setBagQty = createAction(
  '[Product] Set Bag Qty',
  props<{ productId: number, qty: number }>()
);
export const showWishlist = createAction('[Product] Show Wishlist');
export const hideWishlist = createAction('[Product] Hide Wishlist');
import { createAction, props } from '@ngrx/store';
import { Product } from '../../model/product.model';

export type SortByType = 'default' | 'low-high' | 'high-low';

export const loadProducts = createAction(
  '[Product] Load Products',
  props<{ products: Product[] }>()
);

export const setCategoryFilter = createAction(
  '[Product] Set Category Filter',
  props<{ category: string }>()
);

export const setSearchTerm = createAction(
  '[Product] Set Search Term',
  props<{ term: string }>()
);

export const setPriceRange = createAction(
  '[Product] Set Price Range',
  props<{ range: [number, number] | null }>()
);

export const setColorFilter = createAction(
  '[Product] Set Color Filter',
  props<{ color: string | null }>()
);

export const setTagFilter = createAction(
  '[Product] Set Tag Filter',
  props<{ tag: string | null }>()
);

export const setSortBy = createAction(
  '[Product] Set Sort By',
  props<{ sortBy: SortByType }>()
);

export const toggleFavorite = createAction(
  '[Product] Toggle Favorite',
  props<{ productId: number }>()
);

export const addToBag = createAction(
  '[Product] Add To Bag',
  props<{ productId: number, qty: number }>()
);

export const removeFromBag = createAction(
  '[Product] Remove From Bag',
  props<{ productId: number }>()
);

export const clearFilters = createAction('[Product] Clear Filters');
