import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  selectFilteredProducts,
  selectSelectedCategory,
  selectWishlist,
  selectShowWishlist
} from '../../Store/product/product.selectors';
import { Store } from '@ngrx/store';
import {
  loadProducts,
  setCategoryFilter,
  setSearchTerm,
  setPriceRange,
  setColorFilter,
  setTagFilter,
  setSortBy,
  clearFilters
} from '../../Store/product/product.actions';
import { Product } from '../../models/product.model';
import { products } from '../../models/products-mock-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('productAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.9)' })),
      ]),
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms ease', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease', style({ opacity: 0 }))
      ])
    ])
  ],
})
  export class HomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  selectedSort: 'default' | 'low-high' | 'high-low' = 'default';
  selectedPrice: { min: number, max: number } | null = null;
  selectedColor: string | null = null;
  selectedTag: string | null = null;
  products$: Observable<Product[]>;
  wishlist$: Observable<Product[]>;
  showWishlist$: Observable<boolean>;
  selectedCategory$: Observable<string>;

  // local UI state
  showFilter = false;
  showSearch = false;
  searchTerm = '';

  constructor(private store: Store) {
    this.products$ = this.store.select(selectFilteredProducts);
    this.wishlist$ = this.store.select(selectWishlist);
    this.showWishlist$ = this.store.select(selectShowWishlist);
    this.selectedCategory$ = this.store.select(selectSelectedCategory);
  }


  ngOnInit(): void {
    console.log("products _________",products);
   const sampleProducts: Product[] = products;

  this.store.dispatch(loadProducts({ products: sampleProducts }));
  // Example: subscribe to something with takeUntil
  // this.products$.pipe(takeUntil(this.destroy$)).subscribe();
 }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  filterProducts(category: string) {
    this.store.dispatch(setCategoryFilter({ category }));
  }

  // search input (bound with ngModel)
  onSearchChange() {
    this.store.dispatch(setSearchTerm({ term: this.searchTerm }));
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
    if (this.showFilter) {
      this.showSearch = false;
    }
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
    if (this.showSearch) {
      this.showFilter = false;
    }
    if (!this.showSearch) {
      this.searchTerm = '';
      this.store.dispatch(setSearchTerm({ term: '' }));
    }
  }

  applyPriceFilter(min: number, max: number) {
    this.selectedPrice = { min, max };
    this.store.dispatch(setPriceRange({ range: [min, max] }));
  }

  applyColorFilter(color: string | null) {
    this.selectedColor = color;
    this.store.dispatch(setColorFilter({ color }));
  }

  applyTagFilter(tag: string | null) {
    this.selectedTag = tag;
    this.store.dispatch(setTagFilter({ tag }));
  }

  applySort(sortBy: 'default' | 'low-high' | 'high-low') {
    this.selectedSort = sortBy;
    this.store.dispatch(setSortBy({ sortBy }));
  }

  clearAllFilters() {
    this.selectedSort = 'default';
    this.selectedPrice = null;
    this.selectedColor = null;
    this.selectedTag = null;
    this.store.dispatch(clearFilters());
  }
}
