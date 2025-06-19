import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./programs/example/example.routes').then((r) => r.routes),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
