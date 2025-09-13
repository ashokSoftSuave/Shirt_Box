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
    // Implement totals update logic if needed
    this.total = this.subtotal + 10; // add flat shipping fee for demo
  }

  proceedToCheckout() {
    // Implement checkout logic if needed
  }
}
