import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css']
})
export class OrderstatusComponent implements OnInit {

  percent1 : string;
  percent2 : string;
  percent3 : string;
  constructor() { 
  }

  ngOnInit(): void {
    this.percent1 = "69";
    this.percent2 = "49";
    this.percent3 = "29";
    

  }


}
