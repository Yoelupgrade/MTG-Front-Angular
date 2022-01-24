import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `home`, loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `mallets`, loadChildren: () =>
      import('./pages/mallets/mallets.module').then(m => m.MalletsModule)
  },
  {
    path: `cards`, loadChildren: () =>
      import('./pages/cards/cards.module').then(m => m.CardsModule)
  },
  {
    path: `about`, loadChildren: () =>
      import('./pages/about/about.module').then(m => m.AboutModule)
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
