import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { ViewCartComponent } from '../components/view-cart/view-cart.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },  
    { path: 'home', component:HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'cart', component: ViewCartComponent }
];
