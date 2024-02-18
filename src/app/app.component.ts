import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, SliderComponent, NavbarComponent],
})
export class AppComponent {
  title = 'arte-del-medio-orirnte';
}
