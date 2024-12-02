import { Component } from '@angular/core';
import { TranslocoRootModule } from '../../transloco.root.module';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [TranslocoRootModule, NgForOf],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss',
})
export class OfferComponent {
  offersArray = [
    {
      title: '1',
      text: 'offer.1',
    },
    {
      title: '2',
      text: 'offer.2',
    },
    {
      title: '3',

      text: 'offer.3',
    },
    {
      title: '4',
      text: 'offer.4',
    },
    {
      title: '4',
      text: 'offer.5',
    },
  ];
}
