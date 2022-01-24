import { Icards } from 'src/app/shared/models/sharedpages';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from 'src/app/shared/services/card-service/cards.service';

@Component({
  selector: 'app-cards-id',
  templateUrl: './cards-id.component.html',
  styleUrls: ['./cards-id.component.scss']
})
export class CardsIdComponent implements OnInit {
  public card!: Icards;
  constructor(private activatedRoute: ActivatedRoute, private CardsService: CardsService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const idCard = params.get('idCard');

      this.CardsService.getCard(idCard).subscribe((data: any) => {
        const apiResult: Icards = data;
        this.card = apiResult;
        console.log("Card", this.card)
      })
    })
  }

}
