import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { Product } from '../../model/product.model';
import { Observable } from 'rxjs';
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
  export class HomeComponent {
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
   const sampleProducts: Product[] = [
    {
      id: 1,
      productName: "Esprit Ruffle Shirt",
      price: 16.64,
      category: "women",
      image: "https://themewagon.github.io/cozastore/images/product-01.jpg",
      favourite: false,
      bag: false
    },
    {
      id: 2,
      productName: "Herschel Supply Backpack",
      price: 49.99,
      category: "bag",
      image: "https://themewagon.github.io/cozastore/images/product-02.jpg",
      favourite: false,
      bag: false
    },
    {
      id: 3,
      productName: "Only Check Trouser",
      price: 25.50,
      category: "men",
      image: "https://themewagon.github.io/cozastore/images/product-03.jpg",
      favourite: false,
      bag: false
    },
    {
      id: 4,
      productName: "Front Pocket Jumper",
      price: 34.75,
      category: "women",
      image: "https://themewagon.github.io/cozastore/images/product-04.jpg",
      favourite: false,
      bag: false
    },
    {
      id: 5,
      productName: "Classic Leather Bag",
      price: 120.00,
      category: "bag",
      image: "https://themewagon.github.io/cozastore/images/product-05.jpg",
      favourite: false,
      bag: false
    },
    {
      id: 6,
      productName: "Vintage Watch",
      price: 93.20,
      category: "watch",
      image: "https://themewagon.github.io/cozastore/images/product-06.jpg",
      favourite: false,
      bag: false
    },
    {
      id: 7,
      productName: "Shirt in Stretch Cotton",
      price: 52.66,
      category: "men",
      image: "https://themewagon.github.io/cozastore/images/product-07.jpg",
      favourite: false,
      bag: false
    },
    {
      id: 8,
      productName: "Pieces Metallic Printed Dress",
      price: 18.96,
      category: "women",
      image: "https://themewagon.github.io/cozastore/images/product-08.jpg",
      favourite: false,
      bag: false
    },
    {
      id: 9,
      productName: "Converse All Star Hi Plimsolls",
      price: 75.00,
      category: "shoes",
      image: "https://themewagon.github.io/cozastore/images/product-09.jpg",
      favourite: false,
      bag: false
    },
    {
      id: 10,
      productName: "Femme T-Shirt In Stripe",
      price: 25.85,
      category: "women",
      image: "https://themewagon.github.io/cozastore/images/product-10.jpg",
      favourite: false,
      bag: false
    },
    {
      id: 11,
      productName: "Men's Leather Belt",
      price: 63.16,
      category: "men",
      image: "https://themewagon.github.io/cozastore/images/product-11.jpg",
      favourite: false,
      bag: false
    },
    {
      id: 12,
      productName: "Herschel Supply Belt",
      price: 50.00,
      category: "men",
      image: "https://themewagon.github.io/cozastore/images/product-12.jpg",
      favourite: false,
      bag: false
    },
    {
      id: 13,
      productName: "T-Shirt with Sleeve",
      price: 86.85,
      category: "women",
      image: "https://themewagon.github.io/cozastore/images/product-13.jpg",
      favourite: false,
      bag: false
    },
    {
      id: 14,
      productName: "Pretty Little Thing Coat",
      price: 54.79,
      category: "women",
      image: "https://themewagon.github.io/cozastore/images/product-14.jpg",
      favourite: false,
      bag: false
    },
    {
      id: 15,
      productName: "Mini Silver Mesh Watch",
      price: 86.85,
      category: "watch",
      image: "https://themewagon.github.io/cozastore/images/product-15.jpg",
      favourite: false,
      bag: false
    },
    {
      id: 16,
      productName: "Square Neck Back Dress",
      price: 29.64,
      category: "women",
      image: "https://themewagon.github.io/cozastore/images/product-16.jpg",
      favourite: false,
      bag: false
    }
  ];

     this.store.dispatch(loadProducts({ products: sampleProducts }));
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
