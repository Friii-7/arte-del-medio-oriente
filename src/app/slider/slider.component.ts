import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  images: string[] = [
    '../../../../../assets/images/arte1.png',
    '../../../../../assets/images/esencia1.png',
    '../../../../../assets/images/nargila1.png',
  ];
  currentIndex: number = 0;

  showNextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  showPrevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
