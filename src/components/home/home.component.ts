import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { Product } from '../../model/product.model';
import { Observable } from 'rxjs';
import { selectFilteredProducts, selectSelectedCategory } from '../../Store/product/product.selectors';
import { Store } from '@ngrx/store';
import { loadProducts, setCategoryFilter } from '../../Store/product/product.actions';

@Component({
  selector: 'app-home',
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('productAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'scale(1)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'scale(0.9)' })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent {
 products$: Observable<Product[]>;
 selectedCategory$: Observable<string>;

  constructor(private store: Store) {
    this.products$ = this.store.select(selectFilteredProducts);
     this.selectedCategory$ = this.store.select(selectSelectedCategory);
  }

  ngOnInit(): void {
    // Instead of hardcoding, you can fetch from API later
 const sampleProducts: Product[] = [
  {
    id: 1,
    productName: "Esprit Ruffle Shirt",
    price: 16.64,
    category: "women",
    image: "https://themewagon.github.io/cozastore/images/product-01.jpg"
  },
  {
    id: 2,
    productName: "Herschel supply",
    price: 35.31,
    category: "women",
    image: "https://themewagon.github.io/cozastore/images/product-02.jpg"
  },
  {
    id: 3,
    productName: "Only Check Trouser",
    price: 25.50,
    category: "men",
    image: "https://themewagon.github.io/cozastore/images/product-03.jpg"
  },
  {
    id: 4,
    productName: "Front Pocket Jumper",
    price: 34.75,
    category: "women",
    image: "https://themewagon.github.io/cozastore/images/product-04.jpg"
  },
  {
    id: 5,
    productName: "Vintage Inspired Classic",
    price: 93.20,
    category: "women",
    image: "https://themewagon.github.io/cozastore/images/product-05.jpg"
  },
  {
    id: 6,
    productName: "Vintage Inspired Classic",
    price: 93.20,
    category: "watch",
    image: "https://themewagon.github.io/cozastore/images/product-06.jpg"
  },
  {
    id: 7,
    productName: "Shirt in Stretch Cotton",
    price: 52.66,
    category: "women",
    image: "https://themewagon.github.io/cozastore/images/product-07.jpg"
  },
  {
    id: 8,
    productName: "Pieces Metallic Printed",
    price: 18.96,
    category: "women",
    image: "https://themewagon.github.io/cozastore/images/product-08.jpg"
  },
  {
    id: 9,
    productName: "Converse All Star Hi Plimsolls",
    price: 75.00,
    category: "shoes",
    image: "https://themewagon.github.io/cozastore/images/product-09.jpg"
  },
  {
    id: 10,
    productName: "Femme T-Shirt In Stripe",
    price: 25.85,
    category: "women",
    image: "https://themewagon.github.io/cozastore/images/product-10.jpg"
  },
  {
    id: 11,
    productName: "Herschel supply",
    price: 63.16,
    category: "men",
    image: "https://themewagon.github.io/cozastore/images/product-11.jpg"
  },
  {
    id: 12,
    productName: "Herschel supply belt",
    price: 50.00,
    category: "men",
    image: "https://themewagon.github.io/cozastore/images/product-12.jpg"
  },
  {
    id: 13,
    productName: "T-Shirt with Sleeve",
    price: 86.85,
    category: "women",
    image: "https://themewagon.github.io/cozastore/images/product-13.jpg"
  },
  {
    id: 14,
    productName: "Pretty Little Thing",
    price: 54.79,
    category: "women",
    image: "https://themewagon.github.io/cozastore/images/product-14.jpg"
  },
  {
    id: 15,
    productName: "Mini Silver Mesh Watch",
    price: 86.85,
    category: "watch",
    image: "https://themewagon.github.io/cozastore/images/product-15.jpg"
  },
  {
    id: 16,
    productName: "Square Neck Back",
    price: 29.64,
    category: "women",
    image: "https://themewagon.github.io/cozastore/images/product-16.jpg"
  }
];

    this.store.dispatch(loadProducts({ products: sampleProducts }));
  }

  filterProducts(category: string) {
    this.store.dispatch(setCategoryFilter({ category }));
  }
}
