import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

export interface productDetails{
  productName:string;
  price:number;
  category:string;
  image:string;
  quantity?:number;
  size?:string;
  colur?:string;
}

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
  products:productDetails[]=[
  {
    "productName": "Esprit Ruffle Shirt",
    "price": 16.64,
    "category": "women",
    "image": "https://themewagon.github.io/cozastore/images/product-01.jpg"
  },
  {
    "productName": "Herschel supply",
    "price": 35.31,
    "category": "women",
    "image": "https://themewagon.github.io/cozastore/images/product-02.jpg"
  },
  {
    "productName": "Only Check Trouser",
    "price": 25.50,
    "category": "men",
    "image": "https://themewagon.github.io/cozastore/images/product-03.jpg"
  },
  {
    "productName": "Front Pocket Jumper",
    "price": 34.75,
    "category": "women",
    "image": "https://themewagon.github.io/cozastore/images/product-04.jpg"
  },
  {
    "productName": "Vintage Inspired Classic",
    "price": 93.20,
    "category": "women",
    "image": "https://themewagon.github.io/cozastore/images/product-05.jpg"
  },
  {
    "productName": "Vintage Inspired Classic",
    "price": 93.20,
    "category": "watch",
    "image": "https://themewagon.github.io/cozastore/images/product-06.jpg"
  },
  {
    "productName": "Shirt in Stretch Cotton",
    "price": 52.66,
    "category": "women",
    "image": "https://themewagon.github.io/cozastore/images/product-07.jpg"
  },
  {
    "productName": "Pieces Metallic Printed",
    "price": 18.96,
    "category": "women",
    "image": "https://themewagon.github.io/cozastore/images/product-08.jpg"
  },
  {
    "productName": "Converse All Star Hi Plimsolls",
    "price": 75.00,
    "category": "shoes",
    "image": "https://themewagon.github.io/cozastore/images/product-09.jpg"
  },
  {
    "productName": "Femme T-Shirt In Stripe",
    "price": 25.85,
    "category": "women",
    "image": "https://themewagon.github.io/cozastore/images/product-10.jpg"
  },
  {
    "productName": "Herschel supply",
    "price": 63.16,
    "category": "men",
    "image": "https://themewagon.github.io/cozastore/images/product-11.jpg"
  },
  {
    "productName": "Herschel supply belt",
    "price": 50.00,
    "category": "men",
    "image": "https://themewagon.github.io/cozastore/images/product-12.jpg"
  },
  {
    "productName": "T-Shirt with Sleeve",
    "price": 86.85,
    "category": "women",
    "image": "https://themewagon.github.io/cozastore/images/product-13.jpg"
  },
  {
    "productName": "Pretty Little Thing",
    "price": 54.79,
    "category": "women",
    "image": "https://themewagon.github.io/cozastore/images/product-14.jpg"
  },
  {
    "productName": "Mini Silver Mesh Watch",
    "price": 86.85,
    "category": "watch",
    "image": "https://themewagon.github.io/cozastore/images/product-15.jpg"
  },
  {
    "productName": "Square Neck Back",
    "price": 29.64,
    "category": "women",
    "image": "https://themewagon.github.io/cozastore/images/product-16.jpg"
  }
]

 selectedCategory: string = 'all';

  get filteredProducts() {
    if (this.selectedCategory === 'all') {
      return this.products;
    }
    return this.products.filter(
      (p) => p.category.toLowerCase() === this.selectedCategory.toLowerCase()
    );
  }

  filterProducts(category: string) {
    this.selectedCategory = category;
  }

}
