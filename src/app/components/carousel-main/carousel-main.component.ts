import { Component, OnInit } from '@angular/core'
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel'
import { ChipsModule } from 'primeng/chips'
import { SliderModule } from 'primeng/slider'
import { ButtonModule } from 'primeng/button'
import { Image } from '../../shared/type/image'
import { GalleriaModule, GalleriaResponsiveOptions } from 'primeng/galleria'

@Component({
  selector: 'app-carousel-main',
  templateUrl: './carousel-main.component.html',
  styleUrl: './carousel-main.component.scss',

  standalone: true,
  imports: [CarouselModule, ButtonModule, ChipsModule, SliderModule, GalleriaModule],
  providers: [],
})
export class CarouselMainComponent implements OnInit {
  responsiveOptions: CarouselResponsiveOptions[] = [
    {
      breakpoint: '2024px',
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: '1424px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '1100px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '600px',
      numVisible: 1,
      numScroll: 1,
    },
  ]

  images: Image[] = [
    { src: 'assets/images/skarbka/middle/sm8.jpg', alt: 'Image 1', title: 'Image 1' },
    { src: 'assets/images/skarbka/middle/sm7.jpg', alt: 'Image 2', title: 'Image 1' },
    { src: 'assets/images/skarbka/middle/sm4.jpg', alt: 'Image 3', title: 'Image 1' },
    { src: 'assets/images/skarbka/middle/sm3.jpg', alt: 'Image 4', title: 'Image 1' },
    { src: 'assets/images/pruszkow/middle/em1.jpg', alt: 'Image 6', title: 'Image 1' },
    { src: 'assets/images/pruszkow/middle/em2.jpg', alt: 'Image 7', title: 'Image 1' },
    { src: 'assets/images/pruszkow/middle/em5.jpg', alt: 'Image 8', title: 'Image 1' },
  ]

  ngOnInit() {}
}
