import { Component } from '@angular/core';
import { Inavigator, Ifooter } from './shared/models/Core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Magic-collection';
  public navigator: Inavigator[] = [
    {
      name:"HOME",
      link: "/home"
    },
    {
      name:"MAZOS",
      link: "/mallets"
    },
    {
      name:"CARTAS",
      link: "/cards"
    },
    {
      name:"ABOUT",
      link: "/about"
    },
  ];
  public footer: Ifooter = {
      img: {
        src: "/assets/logo-footer.png",
        alt: "logo png magic manas"
      },
      creator: "Yoel Arenas",
      from: "Upgrade Hub"
  }
}
