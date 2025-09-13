import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  // Form model
  contactForm = {
    email: '',
    message: ''
  };

  // Form submission state
  isSubmitting = false;
  isSubmitted = false;

  constructor() {}

  onSubmit(): void {
    if (this.contactForm.email && this.contactForm.message) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.isSubmitted = true;
        
        // Reset form after successful submission
        setTimeout(() => {
          this.contactForm = { email: '', message: '' };
          this.isSubmitted = false;
        }, 3000);
      }, 1500);
    }
  }

  // Contact information
  contactInfo = {
    address: {
      title: 'Address',
      value: 'Coza Store Center 8th floor, 379\nHudson St, New York, NY 10018 US'
    },
    phone: {
      title: 'Lets Talk',
      value: '+1 800 1236879'
    },
    email: {
      title: 'Sale Support',
      value: 'contact@example.com'
    }
  };
}