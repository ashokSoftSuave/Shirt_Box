import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-totals',
  imports: [CommonModule, FormsModule],
  templateUrl: './cart-totals.component.html',
  styleUrl: './cart-totals.component.scss'
})
export class CartTotalsComponent {
  subtotal: number = 79.65;
  total: number = 79.65;

  country: string = '';
  state: string = '';
  postcode: string = '';

  updateTotals() {
    // Example logic – you can connect to backend/shipping service
    console.log('Updating totals with:', this.country, this.state, this.postcode);
    this.total = this.subtotal + 10; // add flat shipping fee for demo
  }

  proceedToCheckout() {
    console.log('Proceeding to checkout with:', this.total);
    // redirect or call checkout API
  }
}
