import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { addToBag } from '../../Store/product/product.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-quickview',
  imports: [CommonModule, FormsModule],
  templateUrl: './quickview.component.html',
  styleUrl: './quickview.component.scss'
})
export class QuickviewComponent {

  constructor(
    public activeModal: NgbActiveModal,
    private store: Store
  ) { }

  @Input() product: any;
  selectedSize: string = '';
  selectedColor: string = '';
  showSuccessPopup = false;
  successMessage = '';

  quantity = 1;

  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart(sizeRef: any, colorRef: any) {
    sizeRef.control.markAsTouched();
    colorRef.control.markAsTouched();

    if (!this.selectedSize || !this.selectedColor) {
      return;
    }
    this.store.dispatch(addToBag({ productId: this.product.id, qty: this.quantity }));
    this.successMessage = `Product ${this.product.productName} added successfully!`;
    this.showSuccessPopup = true;
  }
  closePopup() {
    this.showSuccessPopup = false;
  }
}
