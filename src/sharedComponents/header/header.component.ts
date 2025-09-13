import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartDetailsComponent } from '../../components/cart-details/cart-details.component';
import { Store } from '@ngrx/store';
import { Product } from '../../model/product.model';
import { Observable } from 'rxjs';
import { whishlistcount } from '../../Store/product/product.selectors';
import { showWishlist, hideWishlist } from '../../Store/product/product.actions';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  cartItemCount = 4;
  wishlistCount = 0;
  wishlist$: Observable<number>;
  wishlistActive = false;

  constructor(private modalService: NgbModal, private store: Store) {
    this.wishlist$ = this.store.select(whishlistcount);
  }

  ngOnInit(): void {
    this.wishlist$.subscribe(count => this.wishlistCount = count);
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
    console.log('open cart');
    
    this.modalService.open(CartDetailsComponent, {
      backdrop: true,
      scrollable: true,
      windowClass: 'cart-modal'
    });
  }
}
