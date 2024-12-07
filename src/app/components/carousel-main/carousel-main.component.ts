import { Component, OnInit } from '@angular/core'
import { CarouselModule } from 'primeng/carousel'
import { ChipsModule } from 'primeng/chips'
import { SliderModule } from 'primeng/slider'
import { ButtonModule } from 'primeng/button'
import { Image } from '../../shared/type/image'

@Component({
  selector: 'app-carousel-main',
  templateUrl: './carousel-main.component.html',
  styleUrl: './carousel-main.component.scss',

  standalone: true,
  imports: [CarouselModule, ButtonModule, ChipsModule, SliderModule],
  providers: [],
})
export class CarouselMainComponent implements OnInit {
  images: Image[] = [
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
  ]

  ngOnInit() {}
}
