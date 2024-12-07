import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { TranslocoRootModule } from './transloco.root.module'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslocoRootModule, RouterLink, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'vipBud'
}
