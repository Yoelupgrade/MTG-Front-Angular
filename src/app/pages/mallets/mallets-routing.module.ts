import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsIdComponent } from '../cards/components/cards-id/cards-id.component';
import { MalletsIdComponent } from './components/mallets-id/mallets-id.component';
import { MalletsComponent } from './mallets.component';

const routes: Routes = [
  {path: "", component: MalletsComponent},
  {path: ":idMallet", component: MalletsIdComponent},
  {path: ":idCard", component: CardsIdComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MalletsRoutingModule { }
