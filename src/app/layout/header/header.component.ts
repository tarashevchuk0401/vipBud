import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TranslocoService } from '@ngneat/transloco'
import { TranslocoRootModule } from '../../transloco.root.module'
import { NgSelectModule } from '@ng-select/ng-select'
import { FormsModule } from '@angular/forms'
import { AsyncPipe, NgTemplateOutlet } from '@angular/common'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [RouterLink, TranslocoRootModule, NgSelectModule, FormsModule, NgTemplateOutlet, AsyncPipe],
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Output() openSidebar = new EventEmitter<void>()

  availableLanguage: { name: string; value: string }[] = [
    { name: 'PL', value: 'pl' },
    { name: 'EN', value: 'en' },
    { name: 'UKR', value: 'uk' },
  ]

  language$: Observable<string>

  constructor(private readonly translocoService: TranslocoService) {
    this.language$ = this.translocoService.langChanges$
  }

  ngOnInit() {
    this.getBrowserLanguage()
  }

  getBrowserLanguage(): void {
    const browserLang = navigator.language || 'en'
    const availableLangs = this.translocoService.getAvailableLangs() as string[]
    const normalizedLang = browserLang.split('-')[0]

    const initialLang = availableLangs.includes(normalizedLang) ? normalizedLang : 'en'

    this.translocoService.setActiveLang(initialLang)
  }

  onLanguageChange(lang: string) {
    this.translocoService.setActiveLang(lang)
  }
}
