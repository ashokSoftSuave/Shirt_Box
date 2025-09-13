import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CardDetailsService } from '../card-details.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quickview',
  imports: [CommonModule, FormsModule],
  templateUrl: './quickview.component.html',
  styleUrl: './quickview.component.scss'
})
export class QuickviewComponent {

  constructor(
    public activeModal: NgbActiveModal,
    private cardDetailsService: CardDetailsService
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
    this.cardDetailsService.setCardDetails({ ...this.product, quantity: this.quantity, size: this.selectedSize, colur: this.selectedColor });
    this.successMessage = `Product "${this.product.productName} added successfully!`;
    this.showSuccessPopup = true;
    setTimeout(() => {
    this.showSuccessPopup = false;
    this.activeModal.close('Close click');
  }, 1800);
    
  }
}
