import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productDetails } from '../home/home.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuickviewComponent } from '../quickview/quickview.component'; 


@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent { 
  public isFavorite : boolean = false;
  public isMouseOver : boolean = false;
  @Input() products!: productDetails;
  constructor(private modalService: NgbModal) {}


  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  openQuickView(product: productDetails) {
    const modalRef = this.modalService.open(QuickviewComponent, { size: 'lg', centered: true });
    modalRef.componentInstance.product = product;
  }
}
