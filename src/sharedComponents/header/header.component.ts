import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartDetailsComponent } from '../../components/cart-details/cart-details.component';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cartItemCount = 4;
  wishlistCount = 0;
  constructor(private modalService: NgbModal) { }

  openCart() {
    console.log('open cart');
    
    this.modalService.open(CartDetailsComponent, {
      backdrop: true,
      scrollable: true,
      windowClass: 'cart-modal'
    });
  }
}
