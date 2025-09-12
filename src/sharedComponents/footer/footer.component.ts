import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  categoriesList : string[] = ["Women", "Men", "Shoes", "Watches"];
  helpList : string[] = ["Track Order", "Returns", "Shipping", "FAQs"];
  address : string = `Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879`

  onHelpClick(help:string){

  }

  onCategoriesClick(category:string){

  }
}
