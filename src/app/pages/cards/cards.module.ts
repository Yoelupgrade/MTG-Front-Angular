import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { CardsIdComponent } from './components/cards-id/cards-id.component';


@NgModule({
  declarations: [
    CardsComponent,
    CardsIdComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    HttpClientModule
  ]
})
export class CardsModule { }
