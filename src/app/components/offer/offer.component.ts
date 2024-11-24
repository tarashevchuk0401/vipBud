import { Component } from '@angular/core';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss',
})
export class OfferComponent {
  offersArray = [
    {
      title: '1',
      text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto impedit provident voluptate. Consequuntur debitis deserunt fuga maiores omnis possimus saepe!',
    },
    {
      title: '2',
      text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto impedit provident voluptate. Consequuntur debitis deserunt fuga maiores omnis possimus saepe!',
    },
    {
      title: '3',
      text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto impedit provident voluptate. Consequuntur debitis deserunt fuga maiores omnis possimus saepe!',
    },
    {
      title: '4',
      text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto impedit provident voluptate. Consequuntur debitis deserunt fuga maiores omnis possimus saepe!',
    },
  ];
}
