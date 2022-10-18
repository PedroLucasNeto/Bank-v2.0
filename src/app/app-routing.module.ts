import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtratosComponent } from './pages/extratos/extratos.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'menu/extratos',
    component: ExtratosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
