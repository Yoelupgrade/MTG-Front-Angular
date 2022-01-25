import { Imallets } from './../../../../shared/models/sharedpages';
import { Component, OnInit } from '@angular/core';
import { MalletsService } from 'src/app/shared/services/mallets-service/mallets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mallets-id',
  templateUrl: './mallets-id.component.html',
  styleUrls: ['./mallets-id.component.scss']
})
export class MalletsIdComponent implements OnInit {
  public mallet!: Imallets;
  constructor(private activatedRoute: ActivatedRoute, 
    private malletsService: MalletsService) { }


  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {
      const idMallet = params.get('idMallet');

      this.malletsService.getMallet(idMallet).subscribe((data: any) => {
        const apiResult: Imallets = data;
        this.mallet = apiResult
        console.log("Mazo", this.mallet)
      })
    })
  }
}
