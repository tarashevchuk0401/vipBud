import { Routes } from '@angular/router'
import { LayoutComponent } from './layout/layout.component'
import { MainComponent } from './pages/main/main.component'
import { ProjectsComponent } from './pages/projects/projects.component'

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'projects', component: ProjectsComponent },
      { path: 'main', component: MainComponent },
      { path: '**', redirectTo: 'main' },
      // { path: '', redirectTo: 'main' },
    ],
  },
]
