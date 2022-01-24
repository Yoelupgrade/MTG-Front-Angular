import { Icards, Imallets } from './../../../../shared/models/sharedpages';
import { Component, OnInit } from '@angular/core';
import { MalletsService } from 'src/app/shared/services/mallets-service/mallets.service';
import { CardsService } from 'src/app/shared/services/card-service/cards.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mallets-id',
  templateUrl: './mallets-id.component.html',
  styleUrls: ['./mallets-id.component.scss']
})
export class MalletsIdComponent implements OnInit {
  public mallet!: Imallets;
  public card!: Icards;
  constructor(private activatedRoute: ActivatedRoute, 
    private malletsService: MalletsService,
    private CardsService: CardsService) { }


  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {
      const idMallet = params.get('idMallet');

      this.malletsService.getMallet(idMallet).subscribe((data: any) => {
        const apiResult: Imallets = data;
        this.mallet = apiResult
        console.log("Mazo", this.mallet)
      })
    })
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
