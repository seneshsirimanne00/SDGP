import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js'

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var myChart = new Chart("mychart1", {
      type: 'line',
      data: {
          labels: ['Feb 2', 'Feb 3', 'Feb 4', 'Feb 5', 'Feb 6', 'Feb 7', 'Feb 8', 'Feb 9','Feb 10','Feb 11','Feb 12','Feb 13'],
          datasets: [{
            label: 'Raw Material Qty ',
              data: [
                {x: 100,y: 214},
                {x: 123,y: 234},
                {x: 156,y: 167},
                {x: 234,y: 345},
                {x: 222,y: 420},
                {x: 123,y: 321},
                {x: 10,y: 345},
                {x: 10,y: 221},
                {x: 10,y: 243},
                {x: 10,y: 321},
                {x: 10,y: 356},
                {x: 10,y: 345},
                {x: 10,y: 378}, 
                {x: 15,y: 420}
          ],
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
