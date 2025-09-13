import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product } from '../../models/product.model';
import { selectBagItems } from '../../Store/product/product.selectors';
import { removeFromBag } from '../../Store/product/product.actions';

@Component({
  selector: 'app-cart-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.scss'
})
export class CartDetailsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  isOpen = false;
  cartItems$!: Observable<Product[]>;
  cartItems: Product[] = [];

  ngOnInit() {
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
    

  openCart() {
    this.isOpen = true;
  }

  constructor(public activeModal: NgbActiveModal,private router: Router,
    private store: Store  
  ) { }

  getTotal() {
    return this.cartItems.reduce((sum, item) => sum + (item.price * (item.qty ?? 1)), 0);
  }

  close() {
    this.activeModal.dismiss();
  }

  removeFromCart(item: Product) {
    this.store.dispatch(removeFromBag({ productId: item.id }));
  }
  viewCart(){
    this.router.navigate(['/cart']);
    this.activeModal.dismiss();
  }
}
