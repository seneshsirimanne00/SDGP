import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitermdp',
  templateUrl: './monitermdp.component.html',
  styleUrls: ['./monitermdp.component.css']
})
export class MonitermdpComponent implements OnInit {
  percent : string;
  constructor() { }

  ngOnInit(): void {
    this.percent = "60";
  }

}
