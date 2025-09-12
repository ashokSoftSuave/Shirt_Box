import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productDetails } from '../home/home.component';

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


  toggleFavorite() {
    console.log("test");
    
    this.isFavorite = !this.isFavorite;
  }
}
