import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart-details',
  imports: [CommonModule],
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.scss'
})
export class CartDetailsComponent {
  isOpen = false;

  cartItems = [
    { name: 'White Shirt Pleat', price: 19, qty: 1, img: 'https://themewagon.github.io/cozastore/images/item-cart-01.jpg' },
    { name: 'Converse All Star', price: 39, qty: 1, img: 'https://themewagon.github.io/cozastore/images/item-cart-02.jpg' },
    { name: 'Nixon Porter Leather', price: 17, qty: 1, img: 'https://themewagon.github.io/cozastore/images/item-cart-03.jpg' }
  ];

  openCart() {
    this.isOpen = true;
  }

  constructor(public activeModal: NgbActiveModal) { }

  getTotal() {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }

  close() {
    this.activeModal.dismiss();
  }

}
