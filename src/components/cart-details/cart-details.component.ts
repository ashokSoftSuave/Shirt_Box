import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';
import { selectBagItems } from '../../Store/product/product.selectors';

@Component({
  selector: 'app-cart-details',
  imports: [CommonModule],
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.scss'
})
export class CartDetailsComponent implements OnInit {
  isOpen = false;
  cartItems$!: Observable<Product[]>;
  cartItems: Product[] = [];

  ngOnInit() {
    this.cartItems$ = this.store.select(selectBagItems);
    this.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }
    

  openCart() {
    this.isOpen = true;
  }

  constructor(public activeModal: NgbActiveModal,
    private store: Store  
  ) { }

  getTotal() {
    return this.cartItems.reduce((sum, item) => sum + (item.price * (item.qty ?? 1)), 0);
  }

  close() {
    this.activeModal.dismiss();
  }

}
