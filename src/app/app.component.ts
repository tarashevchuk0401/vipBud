import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from './header/header.component'
import { TranslocoRootModule } from './transloco.root.module'
import { CommonModule } from '@angular/common'
import { MainPhotoComponent } from './main-photo/main-photo.component'
import { OfferComponent } from './offer/offer.component'I

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        HeaderComponent,
        TranslocoRootModule,
        MainPhotoComponent,
        OfferComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'vipBud'
}
