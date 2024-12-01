import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { TranslocoRootModule } from '../../transloco.root.module';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, TranslocoPipe, TranslocoRootModule, NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  language: string = 'en';
  @Output() closeSidebar = new EventEmitter<void>();

  constructor(private translocoService: TranslocoService) {}

  ngOnInit() {
    this.language = this.translocoService.getActiveLang();
  }

  onLanguageChange(lang: string) {
    this.translocoService.setActiveLang(lang);
    this.language = lang;
  }
}
