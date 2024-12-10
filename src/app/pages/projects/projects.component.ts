import { Component } from '@angular/core'
import { GalleriaModule, GalleriaResponsiveOptions } from 'primeng/galleria'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CarouselModule } from 'primeng/carousel'
import { TranslocoPipe } from '@ngneat/transloco'

export interface GalleryItem {
  itemImageSrc: string
  thumbnailImageSrc: string
}

export interface Gallery {
  title: string
  alt: string
  gallery: GalleryItem[]
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [GalleriaModule, ReactiveFormsModule, FormsModule, CarouselModule, TranslocoPipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  responsiveOptions: GalleriaResponsiveOptions[] = [
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 2,
    },
  ]

  galleryItem: Gallery = {
    title: 'projects.bialoleka',
    alt: '60 m2',
    gallery: [
      {
        itemImageSrc: 'assets/images/skarbka/middle/sm8.jpg',
        thumbnailImageSrc: 'assets/images/skarbka/small/ss8.jpg',
      },
      {
        itemImageSrc: 'assets/images/skarbka/middle/sm1.jpg',
        thumbnailImageSrc: 'assets/images/skarbka/small/ss1.jpg',
      },
      {
        itemImageSrc: 'assets/images/skarbka/middle/sm2.jpg',
        thumbnailImageSrc: 'assets/images/skarbka/small/ss2.jpg',
      },
      {
        itemImageSrc: 'assets/images/skarbka/middle/sm3.jpg',
        thumbnailImageSrc: 'assets/images/skarbka/small/ss3.jpg',
      },
      {
        itemImageSrc: 'assets/images/skarbka/middle/sm4.jpg',
        thumbnailImageSrc: 'assets/images/skarbka/small/ss4.jpg',
      },
      {
        itemImageSrc: 'assets/images/skarbka/middle/sm5.jpg',
        thumbnailImageSrc: 'assets/images/skarbka/small/ss5.jpg',
      },
      {
        itemImageSrc: 'assets/images/skarbka/middle/sm6.jpg',
        thumbnailImageSrc: 'assets/images/skarbka/small/ss6.jpg',
      },
      {
        itemImageSrc: 'assets/images/skarbka/middle/sm7.jpg',
        thumbnailImageSrc: 'assets/images/skarbka/small/ss7.jpg',
      },
    ],
  }

  galleryItem2: Gallery = {
    title: 'projects.pruszkow',
    alt: '250 m2',
    gallery: [
      {
        itemImageSrc: 'assets/images/pruszkow/middle/em2.jpg',
        thumbnailImageSrc: 'assets/images/pruszkow/small/es2.jpg',
      },
      {
        itemImageSrc: 'assets/images/pruszkow/middle/em4.jpg',
        thumbnailImageSrc: 'assets/images/pruszkow/small/es4.jpg',
      },
      {
        itemImageSrc: 'assets/images/pruszkow/middle/em3.jpg',
        thumbnailImageSrc: 'assets/images/pruszkow/small/es3.jpg',
      },

      {
        itemImageSrc: 'assets/images/pruszkow/middle/em5.jpg',
        thumbnailImageSrc: 'assets/images/pruszkow/small/es5.jpg',
      },

      {
        itemImageSrc: 'assets/images/pruszkow/middle/em1.jpg',
        thumbnailImageSrc: 'assets/images/pruszkow/small/es1.jpg',
      },
      {
        itemImageSrc: 'assets/images/pruszkow/middle/em6.jpg',
        thumbnailImageSrc: 'assets/images/pruszkow/small/es6.jpg',
      },
    ],
  }

  gallery: Gallery[] = [this.galleryItem, this.galleryItem2]
}
