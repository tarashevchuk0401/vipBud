import { Component } from '@angular/core';
import { OfferComponent } from '../../components/offer/offer.component';
import { TranslocoRootModule } from '../../transloco.root.module';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [OfferComponent, TranslocoRootModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
