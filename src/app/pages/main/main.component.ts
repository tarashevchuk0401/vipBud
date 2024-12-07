import { Component } from '@angular/core'
import { OfferComponent } from '../../components/offer/offer.component'
import { TranslocoRootModule } from '../../transloco.root.module'
import { CarouselMainComponent } from '../../components/carousel-main/carousel-main.component'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [OfferComponent, TranslocoRootModule, CarouselMainComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
