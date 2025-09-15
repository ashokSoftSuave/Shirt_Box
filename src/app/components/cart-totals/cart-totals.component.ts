import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import Swal from 'sweetalert2';
import { Product } from '../../models/product.model';
import { selectBagItems } from '../../Store/product/product.selectors';
import { Store } from '@ngrx/store';
import { products } from '../../models/products-mock-data';
import { FormsModule, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-cart-totals',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cart-totals.component.html',
  styleUrl: './cart-totals.component.scss'
})
export class CartTotalsComponent implements OnInit {
  subtotal: number = 0;
  total: number = 0;
  formDisabled = true
  country: string = '';
  state: string = '';
  postcode: string = '';
  private destroy$ = new Subject<void>();
  cartItems$!: Observable<Product[]>;
  cartItems: Product[] = [];
  shippingForm: FormGroup;


  constructor(private router: Router, private store: Store, private fb: FormBuilder) {
    // Initialize reactive form
    this.shippingForm = this.fb.group({
      country: ['', Validators.required],
      state: ['', Validators.required],
      postcode: ['', [Validators.required, Validators.pattern(/^\d{5,6}$/)]], // Example: US ZIP code
    });
  }

  ngOnInit(): void {
    this.cartItems$ = this.store.select(selectBagItems);
    this.cartItems$
      .pipe(takeUntil(this.destroy$))
      .subscribe((items: Product[]) => {
        this.cartItems = items;
        console.log("data", this.cartItems);
        this.total = this.subtotal = items.reduce(
          (sum, item) => sum + item.price * (item?.qty ?? 0),
          0
        );

      
      });

      this.shippingForm.valueChanges.subscribe((data: any) =>{
          console.log(data)
          console.log("this.shippingForm.valid",this.shippingForm.valid,this.shippingForm.errors);
      } );
      

  }

  updateTotals() {
    console.log('Updating totals with:', this.country, this.state, this.postcode);
    this.total = this.subtotal + 10; // add flat shipping fee for demo



  }


  proceedToPay() {
    if (this.shippingForm.valid) {
    Swal.fire({
      icon: 'success',
      title: 'Payment Successful!',
      text: 'Your payment has been successfully processed.',
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
        this.router.navigate(['/home']);
      }
    });
  }
  }
}
