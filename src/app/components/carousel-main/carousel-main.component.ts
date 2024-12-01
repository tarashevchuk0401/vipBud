import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ChipsModule } from 'primeng/chips';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';

export interface Imeage {
  src: string;
  title: string;
  alt: string;
}

@Component({
  selector: 'app-carousel-main',
  templateUrl: './carousel-main.component.html',
  styleUrl: './carousel-main.component.scss',

  standalone: true,
  imports: [CarouselModule, ButtonModule, ChipsModule, SliderModule],
  providers: [],
})
export class CarouselMainComponent implements OnInit {
  imageUrl: string = 'assets/images/sofa.jpg';
  images: Imeage[] = [
    { src: 'assets/images/sofa.jpg', alt: 'Image 1', title: 'Image 1' },
    { src: 'assets/images/bedroom.jpg', alt: 'Image 2', title: 'Image 2' },
    {
      src: 'assets/images/room_optimized.jpg',
      alt: 'Image 2',
      title: 'Image 2',
    },
    { src: 'assets/images/room2.jpg', alt: 'Image 1', title: 'Image 1' },
    { src: 'assets/images/sofa.jpg', alt: 'Image 2', title: 'Image 2' },
    {
      src: 'assets/images/room_optimized.jpg',
      alt: 'Image 2',
      title: 'Image 2',
    },
  ];

  items: Imeage[] = [];

  ngOnInit() {}
}
