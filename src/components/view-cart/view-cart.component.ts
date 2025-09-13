import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartTotalsComponent } from '../cart-totals/cart-totals.component';

@Component({
  selector: 'app-view-cart',
  imports: [CommonModule, FormsModule,CartTotalsComponent],
  templateUrl: './view-cart.component.html',
  styleUrl: './view-cart.component.scss'
})
export class ViewCartComponent {
  cartItems = [
    {
      name: 'Fresh Strawberries',
      price: 36,
      quantity: 1,
      image: 'https://themewagon.github.io/cozastore/images/item-cart-04.jpg',
    },
    {
      name: 'Lightweight Jacket',
      price: 16,
      quantity: 1,
      image: 'https://themewagon.github.io/cozastore/images/item-cart-05.jpg',
    },
  ];

  couponCode: string = '';

  increaseQuantity(item: any) {
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  updateCart() {
    console.log('Cart updated', this.cartItems);
  }

  applyCoupon() {
    console.log('Coupon applied:', this.couponCode);
  }

}
