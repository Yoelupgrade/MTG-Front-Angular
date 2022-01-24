import { Component, Input, OnInit } from '@angular/core';
import { Ifooter } from 'src/app/shared/models/Core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
@Input() footer!: Ifooter;
  constructor() { }

  ngOnInit(): void {
  }

}
