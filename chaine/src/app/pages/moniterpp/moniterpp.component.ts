import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moniterpp',
  templateUrl: './moniterpp.component.html',
  styleUrls: ['./moniterpp.component.css']
})
export class MoniterppComponent implements OnInit {
  percent : string;
  constructor() { }

  ngOnInit(): void {
    this.percent = "60";
  }

  debugger(){
    console.log("hooooo");
  }
}
