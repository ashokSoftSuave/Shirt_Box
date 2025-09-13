import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CardDetailsService {

  constructor() { }
  cardProductList : Product[] = [];

  getCardDetails() {
    return this.cardProductList;
  }

  setCardDetails(product: Product) {
    this.cardProductList.push(product);
  }
}
