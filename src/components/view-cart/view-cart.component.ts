import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartTotalsComponent } from '../cart-totals/cart-totals.component';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product } from '../../models/product.model';
import { Store } from '@ngrx/store';
import { selectBagItems } from '../../Store/product/product.selectors';
import { incrementBagQty, decrementBagQty } from '../../Store/product/product.actions';

@Component({
  selector: 'app-view-cart',
  imports: [CommonModule, FormsModule,CartTotalsComponent],
  templateUrl: './view-cart.component.html',
  styleUrl: './view-cart.component.scss'
})
export class ViewCartComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  cartItems$!: Observable<Product[]>;
  cartItems: Product[] = [];

  couponCode: string = '';
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.cartItems$ = this.store.select(selectBagItems);
    this.cartItems$
      .pipe(takeUntil(this.destroy$))
      .subscribe(items => {
        this.cartItems = items;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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
    // Implement cart update logic if needed
  }

  applyCoupon() {
    // Implement coupon logic if needed
  }

}
