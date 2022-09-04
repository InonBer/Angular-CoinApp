import { ChartDataset, ChartOptions } from 'chart.js';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() xVals!: string[]
  @Input() yVals!: number[]
  chartData!: ChartDataset[]
  chartLabels!: string[]
  chartOptions!: ChartOptions

  ngOnInit(): void {
    this.setChartData()
    console.log(this.xVals);
    
  }

  setChartData() {
    this.chartData = [
      {
        label: 'Bitcoin Market Price USD',
        data: this.yVals,
        borderColor:'black',
      }
    ];
    this.chartLabels = this.xVals;
    this.chartOptions = {
      elements: {
        point:{
            radius: 0
        }
    },
   scales:{
    x: {
      ticks: {
        color: 'black'
      }
    },
    y: {
      ticks: {
        color: 'black'
      }
    }
   },
   plugins:{
    legend:{
      labels:{
        color:'black'
      }
    }
   }
    };
  }
  constructor() { }

}


