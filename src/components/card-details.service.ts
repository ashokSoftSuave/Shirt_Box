import { Injectable } from '@angular/core';
import { productDetails } from './home/home.component';

@Injectable({
  providedIn: 'root'
})
export class CardDetailsService {

  constructor() { }
  cardProductList : productDetails[] = [];

  getCardDetails() {
    return this.cardProductList;
  }

  setCardDetails(product: productDetails) {
    this.cardProductList.push(product);
  }
}
