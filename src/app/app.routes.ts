import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { GalleryComponent } from './pages/galery/gallery.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'gallery', component: GalleryComponent },
      { path: 'main', component: MainComponent },
      { path: '**', redirectTo: 'main' },
      // { path: '', redirectTo: 'main' },
    ],
  },
];
