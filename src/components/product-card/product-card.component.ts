import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuickviewComponent } from '../quickview/quickview.component'; 
import { Store } from '@ngrx/store';
import { toggleFavorite } from '../../Store/product/product.actions';


@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent { 
  public isMouseOver : boolean = false;
  @Input() products!: Product;
  constructor(private modalService: NgbModal,
    private store: Store
  ) {}


  toggleFavorite() {
    this.store.dispatch(toggleFavorite({ productId: this.products.id }));
  }

  openQuickView(product: Product) {
    const modalRef = this.modalService.open(QuickviewComponent, { size: 'lg', centered: true });
    modalRef.componentInstance.product = product;
  }
}
