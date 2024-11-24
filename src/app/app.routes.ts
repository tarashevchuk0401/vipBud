import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { GaleryComponent } from './pages/galery/galery.component';
import { MainPhotoComponent } from './components/main-photo/main-photo.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: GaleryComponent },
      { path: 'main', component: MainPhotoComponent },
    ],
  },
];
