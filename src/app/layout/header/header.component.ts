import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { TranslocoRootModule } from '../../transloco.root.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [RouterLink, TranslocoRootModule, NgSelectModule, FormsModule],
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Output() openSidebar = new EventEmitter<void>();

  availableLanguage: { name: string; value: string }[] = [
    { name: 'UKR', value: 'uk' },
    { name: 'PL', value: 'pl' },
    { name: 'EN', value: 'en' },
  ];

  private readonly translocoService = inject(TranslocoService);
  language: string = 'en';

  ngOnInit() {
    this.getBrowserLanguage();
  }

  getBrowserLanguage(): void {
    const browserLang = navigator.language || 'en';
    const availableLangs =
      this.translocoService.getAvailableLangs() as string[];
    const normalizedLang = browserLang.split('-')[0];

    this.language = availableLangs.includes(normalizedLang)
      ? normalizedLang
      : 'en';

    this.translocoService.setActiveLang(this.language);
  }

  onLanguageChange(lang: string) {
    this.translocoService.setActiveLang(lang);
    this.language = lang;
  }
}
