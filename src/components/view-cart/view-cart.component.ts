import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartTotalsComponent } from '../cart-totals/cart-totals.component';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';
import { Store } from '@ngrx/store';
import { selectBagItems } from '../../Store/product/product.selectors';
import { incrementBagQty, decrementBagQty } from '../../Store/product/product.actions';

@Component({
  selector: 'app-view-cart',
  imports: [CommonModule, FormsModule,CartTotalsComponent],
  templateUrl: './view-cart.component.html',
  styleUrl: './view-cart.component.scss'
})
export class ViewCartComponent implements OnInit {
  cartItems$!: Observable<Product[]>;
  cartItems: Product[] = [];

  couponCode: string = '';
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.cartItems$ = this.store.select(selectBagItems);
    this.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  increaseQuantity(item: Product) {
    this.store.dispatch(incrementBagQty({ productId: item.id }));
  }

  decreaseQuantity(item: Product) {
    if ((item.qty ?? 1) > 1) {
      this.store.dispatch(decrementBagQty({ productId: item.id }));
    }
  }

  updateCart() {
    console.log('Cart updated', this.cartItems);
  }

  applyCoupon() {
    console.log('Coupon applied:', this.couponCode);
  }

}
