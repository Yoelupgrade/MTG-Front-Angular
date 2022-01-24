import { CardsComponent } from './cards.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsIdComponent } from './components/cards-id/cards-id.component';

const routes: Routes = [
  {path: "", component: CardsComponent},
  {path: ":idCard", component: CardsIdComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
