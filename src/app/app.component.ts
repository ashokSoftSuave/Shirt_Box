import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../sharedComponents/footer/footer.component';
import { HeaderComponent } from '../sharedComponents/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ShirtBox';
}
