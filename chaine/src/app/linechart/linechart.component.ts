import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js'
import { DatatransferService } from '../datatransfer.service';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {

  search : String;
  linechartx : String[];
  linecharty : number[];

  constructor(private datatransfer : DatatransferService) {}

  ngOnInit() {
    this.initGraph();//just to draw the graph without data 
    //this.datatransfer.sendPurchaseOrderForm(this.matName,this.matQty,this.vendorName).subscribe();
    //this.datatransfer.getlinegraphXData().subscribe( (data) => {this.linechartx = data; this.initGraph()} );
    //this.datatransfer.getlinegraphYData().subscribe( (data) => {this.linecharty = data ; this.initGraph()} );
    //just for testing

  }

  searchthetxt(){
    this.initGraph();
    this.datatransfer.sendlinechartsearchdata(this.search).subscribe();
    //so when the button is pressed the graphs can replace the new graph 
    this.datatransfer.getlinegraphXData().subscribe( (data) => {this.linechartx = data; this.initGraph()} );
    this.datatransfer.getlinegraphYData().subscribe( (data) => {this.linecharty = data ; this.initGraph()} );

  }

  initGraph(){

    var myChart = new Chart("mychart1", {
      type: 'line',
      data: {
          //labels: ['Feb 2', 'Feb 3', 'Feb 4', 'Feb 5', 'Feb 6', 'Feb 7', 'Feb 8', 'Feb 9','Feb 10','Feb 11','Feb 12']
          labels: this.linechartx,
          datasets: [{
            label: 'Raw Material Qty ',
              /*data: [
                {x: 0,y: 214},
                {x: 0,y: 234},
                {x: 0,y: 167},
                {x: 0,y: 345},
                {x: 0,y: 420},
                {x: 0,y: 321},
                {x: 0,y: 345},
                {x: 0,y: 221},
                {x: 0,y: 243},
                {x: 0,y: 321},
                {x: 0,y: 356},
                {x: 0,y: 345},
                {x: 0,y: 378}, 
                {x: 0,y: 420}
          ]*///data: [214,{y: 25},{y: 366},{y: 88},{y: 45},{y: 268},{y: 214},{y: 114},{y: 41},{y: 154},{y: 189},{y: 222},{y: 214}]
             // data: [214,25,366,88]
             data: this.linecharty,
            backgroundColor:['rgba(54, 162, 235, 0.7)'],
            borderJoinStyle:['bevel'],
            lineTension:['0'],
            
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                      stacked: true
                  }
              }]
          }
      }
  });

  }

}
