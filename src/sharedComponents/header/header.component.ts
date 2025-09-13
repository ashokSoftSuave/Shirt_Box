import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartDetailsComponent } from '../../components/cart-details/cart-details.component';
import { Store } from '@ngrx/store';
import { Product } from '../../model/product.model';
import { Observable } from 'rxjs';
import { selectWishlist } from '../../Store/product/product.selectors';
import { WishlistModalComponent } from './wishlist-modal.component';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cartItemCount = 4;
  wishlistCount = 0;
  wishlist$: Observable<Product[]>;

  constructor(private modalService: NgbModal, private store: Store) {
    this.wishlist$ = this.store.select(selectWishlist);
    this.wishlist$.subscribe(list => this.wishlistCount = list.length);
  }

  openWishlist() {
    this.modalService.open(WishlistModalComponent, {
      backdrop: true,
      scrollable: true,
      windowClass: 'wishlist-modal-window'
    });
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
