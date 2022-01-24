import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MalletsService {
  public malletsUrl: string = "https://api-magic-library.vercel.app/api/mallets";
  public cardsUrl: string = "https://api-magic-library.vercel.app/api/cards"
  constructor(private httpClient: HttpClient) { }

  public getAllmallets(){
    return this.httpClient.get(this.malletsUrl)
  }
  public getMallet(idMallet: any) {
    return this.httpClient.get(`${this.malletsUrl}/${idMallet}`)
  }
  public getCard(idCard: any) {
    return this.httpClient.get(`${this.cardsUrl}/${idCard}`)
}
}
