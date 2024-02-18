import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { SliderComponent } from '../../slider/slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [NavbarComponent, SliderComponent],
})
export class HomeComponent {}
