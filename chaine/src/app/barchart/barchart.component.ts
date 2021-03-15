import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js'

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var myChart = new Chart("mychart", {
      type: 'bar',
      data: {
          labels: ['Material 1', 'Material2', ' Material 3', 'Material 4', 'Material 5','Material 6','Material 7','Material 8'],
          datasets: [{
              label: 'Raw Material Qty ',
              maxBarThickness: 30,
              data: [1200, 2190, 3000, 2450, 620,890,420,69],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.7)',
                  'rgba(54, 162, 235, 0.7)',
                  'rgba(255, 206, 86, 0.7)',
                  'rgba(75, 192, 192, 0.7)',
                  'rgba(153, 102, 255, 0.7)',
                  'rgba(255, 159, 64, 0.7)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });

  }

}
