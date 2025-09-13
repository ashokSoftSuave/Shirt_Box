import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

export const selectProductState = createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(
  selectProductState,
  (s) => s.products
);

export const selectSelectedCategory = createSelector(
  selectProductState,
  (s) => s.selectedCategory
);

export const selectSearchTerm = createSelector(
  selectProductState,
  (s) => s.searchTerm
);

export const selectPriceRange = createSelector(
  selectProductState,
  (s) => s.priceRange
);

export const selectColor = createSelector(
  selectProductState,
  (s) => s.color
);

export const selectTag = createSelector(
  selectProductState,
  (s) => s.tag
);

export const selectSortBy = createSelector(
  selectProductState,
  (s) => s.sortBy
);

// Wishlist selectors
export const selectWishlist = createSelector(
  selectAllProducts,
  (products) => products.filter(p => p.favourite)
);

export const selectIsProductFavorite = (productId: number) => createSelector(
  selectAllProducts,
  (products) => !!products.find(p => p.id === productId && p.favourite)
);

export const selectFilteredProducts = createSelector(
  selectAllProducts,
  selectSelectedCategory,
  selectSearchTerm,
  selectPriceRange,
  selectColor,
  selectTag,
  selectSortBy,
  (products, category, term, priceRange, color, tag, sortBy) => {
    let result = [...products];

    // category
    if (category && category !== 'all') {
      result = result.filter(p => p.category?.toLowerCase() === category.toLowerCase());
    }

    // search term
    if (term) {
      const q = term.toLowerCase();
      result = result.filter(p =>
        (p.productName || '').toLowerCase().includes(q) ||
        (p.category || '').toLowerCase().includes(q)
      );
    }

    // price range
    if (priceRange) {
      const [min, max] = priceRange;
      result = result.filter(p => p.price >= min && p.price <= max);
    }

    // color (example - adjust as you store colors)
    if (color) {
      const c = color.toLowerCase();
      // here we just check productName for demo; adapt to real color property if you add it
      result = result.filter(p => (p.productName || '').toLowerCase().includes(c));
    }

    // tag (example)
    if (tag) {
      const t = tag.toLowerCase();
      result = result.filter(p => (p.productName || '').toLowerCase().includes(t));
    }

    // sort
    if (sortBy === 'low-high') {
      result = result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high-low') {
      result = result.sort((a, b) => b.price - a.price);
    }

    return result;
  }
);
