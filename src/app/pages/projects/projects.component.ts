import { Component } from '@angular/core';
import { Image } from '../../shared/type/image';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export interface GalleryItem {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [GalleriaModule, ReactiveFormsModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  // images: Image[] = [
  //   { src: 'assets/images/bedroom.jpg', alt: 'Image 2', title: 'Image 2' },
  //   {
  //     src: 'assets/images/room_optimized.jpg',
  //     alt: 'Image 2',
  //     title: 'Image 2',
  //   },
  //   { src: 'assets/images/room2.jpg', alt: 'Image 1', title: 'Image 1' },
  //   {
  //     src: 'assets/images/room_optimized.jpg',
  //     alt: 'Image 2',
  //     title: 'Image 2',
  //   },
  // ];
  //
  galleryItem: GalleryItem[] = [
    {
      itemImageSrc: 'assets/images/skarbka/IMG_20241201_130037.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: 'assets/images/skarbka/IMG_20241201_130138.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primeng/images/galleria/galleria2s.jpg',
      alt: 'Description for Image 2',
      title: 'Title 2',
    },
    // {
    //   itemImageSrc: 'assets/images/skarbka/IMG_20241201_125444.jpg',
    //   thumbnailImageSrc:
    //     'https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg',
    //   alt: 'Description for Image 3',
    //   title: 'Title 3',
    // },
    // {
    //   itemImageSrc: 'assets/images/skarbka/IMG_20241201_135944.jpg',
    //   thumbnailImageSrc:
    //     'https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg',
    //   alt: 'Description for Image 3',
    //   title: 'Title 3',
    // },
    // {
    //   itemImageSrc: 'assets/images/skarbka/IMG_20241201_140250.jpg',
    //   thumbnailImageSrc:
    //     'https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg',
    //   alt: 'Description for Image 3',
    //   title: 'Title 3',
    // },
  ];

  gallery: GalleryItem[][] = [this.galleryItem, this.galleryItem];
}
