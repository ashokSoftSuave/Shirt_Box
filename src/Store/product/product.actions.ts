// store/product.actions.ts
import { createAction, props } from '@ngrx/store';
import { Product } from '../../model/product.model';

export const loadProducts = createAction(
  '[Product] Load Products',
  props<{ products: Product[] }>()
);

export const setCategoryFilter = createAction(
  '[Product] Set Category Filter',
  props<{ category: string }>()
);
