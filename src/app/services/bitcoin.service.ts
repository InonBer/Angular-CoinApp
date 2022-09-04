import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { map } from "rxjs";
const user = {
    name:'Manoka',
    coins:9999,
    moves:[]
}

@Injectable({
    providedIn: 'root',
  })
  export class BitcoinService {

    constructor(private http:HttpClient){}

    public getRate(coins:number){
          return this.http.get<number>(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
          .pipe(
            map(res=>res)
          )
    }

    getMarketPrice(){
      return this.http.get(`https://api.blockchain.info/charts/market-price?format=json&cors=true`)
      .pipe(
          map(res =>{
            return res})
      )
    }

    public getConfirmedTransactions(){

    }
  }