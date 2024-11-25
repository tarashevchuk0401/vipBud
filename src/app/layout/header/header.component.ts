import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { TranslocoRootModule } from '../../transloco.root.module';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [RouterLink, TranslocoRootModule],
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  @Output() openSidebar = new EventEmitter<void>();

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

    const userInitLanguage = availableLangs.includes(normalizedLang)
      ? normalizedLang
      : 'en';
    this.translocoService.setActiveLang(userInitLanguage);
  }

  onButtonClick(): void {
    this.openSidebar.emit();
  }

  onLanguageChange(lang: string) {
    this.translocoService.setActiveLang(lang);
    this.language = lang;
  }
}
