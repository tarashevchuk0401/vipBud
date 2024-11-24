import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() openSidebar = new EventEmitter<void>();

  onButtonClick(): void {
    this.openSidebar.emit(); // Emit the event
  }
}
