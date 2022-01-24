import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CardsService {
public cardsUrl: string = "https://api-magic-library.vercel.app/api/cards"
  constructor(private httpClient: HttpClient) { }

  public getAllCards(){
    return this.httpClient.get(this.cardsUrl)
  }
  public getCard(idCard: any) {
    return this.httpClient.get(`${this.cardsUrl}/${idCard}`)
  }
}
