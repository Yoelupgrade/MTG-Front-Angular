import { Component, OnInit } from '@angular/core';
import { Imallets } from 'src/app/shared/models/sharedpages';
import { MalletsService } from 'src/app/shared/services/mallets-service/mallets.service';

@Component({
  selector: 'app-mallets',
  templateUrl: './mallets.component.html',
  styleUrls: ['./mallets.component.scss']
})
export class MalletsComponent implements OnInit {
  public mallets: Imallets[] = [];
  constructor(private MalletsService: MalletsService) { }

  ngOnInit(): void {
    this.MalletsService.getAllmallets().subscribe((data:any) =>{
      const apiResults: Imallets[] = data;
      const formattedMallets = apiResults.map(({_id, name, color, type, format_game, card, dock})=>({ 
        _id, name, color, type, format_game, card, dock
      }));
      this.mallets = formattedMallets
    })
  }

}
