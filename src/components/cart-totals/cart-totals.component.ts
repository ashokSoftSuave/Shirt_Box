import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

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
    console.log('Updating totals with:', this.country, this.state, this.postcode);
    this.total = this.subtotal + 10; // add flat shipping fee for demo
  }

  proceedToCheckout() {
    console.log('Proceeding to checkout with:', this.total);
  }

  openCheckoutModal() {
    Swal.fire({
      icon: 'success',
      title: 'Payment Successful!',
      text: 'Your payment has been successfully processed.',
      confirmButtonText: 'OK',
    });
  }
}
