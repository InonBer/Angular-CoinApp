import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'contact-dashboard',
  templateUrl: './contact-dashboard.component.html',
  styleUrls: ['./contact-dashboard.component.scss']
})
export class ContactDashboardComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }
  subscription!: Subscription
  data: any | null = null
  xVals!: string[]
  yVals!: number[]
  ngOnInit(): void {
    this.subscription = this.bitcoinService.getMarketPrice().subscribe(ans => {
      this.data = ans
      this.xVals = this.data.values.map((itm: { x: number }) => {
        const day = new Date(itm.x * 1000).getDate()
        const month = (new Date(itm.x * 1000) + '').substring(4, 7)
        return day + ' ' + month
      })
      this.yVals = this.data.values.map((itm: { y: number; }) => itm.y)
    })
  }

}

