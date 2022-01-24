import { Inavigator } from './../../../shared/models/Core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navBar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
@Input() navBar!: Inavigator [];
  constructor() { }

  ngOnInit(): void {
  }

}
