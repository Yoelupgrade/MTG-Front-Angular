import { Component, OnInit } from '@angular/core';
import { Icards } from 'src/app/shared/models/sharedpages';
import { CardsService } from 'src/app/shared/services/card-service/cards.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
public cards: Icards[] = [];
  constructor(private CardsService: CardsService) { }

  ngOnInit(): void {
    this.CardsService.getAllCards().subscribe((data:any) =>{
      const apiResults: Icards[] = data;
      const formattedCards = apiResults.map(({_id, name, manna_cost, types, abilities, forceAndResistance, img, img_card})=>({ 
        _id,name,manna_cost,types,abilities,forceAndResistance,img,img_card
      }));
      this.cards = formattedCards
    })
  }

}
