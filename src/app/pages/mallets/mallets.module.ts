import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { MalletsRoutingModule } from './mallets-routing.module';
import { MalletsComponent } from './mallets.component';
import { MalletsIdComponent } from './components/mallets-id/mallets-id.component';
//import { CardsIdComponent } from '../cards/components/cards-id/cards-id.component';

@NgModule({
  declarations: [
    MalletsComponent,
    MalletsIdComponent
    //CardsIdComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MalletsRoutingModule
  ]
})
export class MalletsModule { }
