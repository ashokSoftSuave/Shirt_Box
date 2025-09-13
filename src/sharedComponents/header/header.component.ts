import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartDetailsComponent } from '../../components/cart-details/cart-details.component';
import { Store } from '@ngrx/store';
import { Product } from '../../model/product.model';
import { Observable } from 'rxjs';
import { bagcount, whishlistcount } from '../../Store/product/product.selectors';
import { showWishlist, hideWishlist } from '../../Store/product/product.actions';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  cartItemCount = 4;
  wishlistCount = 0;
  wishlist$: Observable<number>;
  bagCount$: Observable<number>;
  wishlistActive = false;

  constructor(private modalService: NgbModal, private store: Store) {
    this.wishlist$ = this.store.select(whishlistcount);
    this.bagCount$ = this.store.select(bagcount); 
  }

  ngOnInit(): void {
    this.wishlist$.subscribe(count => this.wishlistCount = count);
    this.bagCount$.subscribe(count => this.cartItemCount = count);
  }

  openWishlist() {
    if (this.wishlistActive) {
      this.store.dispatch(hideWishlist());
    } else {
      this.store.dispatch(showWishlist());
    }
    this.wishlistActive = !this.wishlistActive;
  }



  openCart() {
    this.modalService.open(CartDetailsComponent, {
      backdrop: true,
      scrollable: true,
      windowClass: 'cart-modal'
    });
  }
}
