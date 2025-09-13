import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent { 
  public isFavorite : boolean = false;
  public isMouseOver : boolean = false;
  @Input() products!: Product;


  toggleFavorite() {
    console.log("test");
    
    this.isFavorite = !this.isFavorite;
  }
}
