import { Component, OnInit } from '@angular/core';

interface distributionData{
  pname: string;
  oid: string;
  qty: number;
  sdate: string;
  fdate: string;
}

@Component({
  selector: 'app-monitermdp',
  templateUrl: './monitermdp.component.html',
  styleUrls: ['./monitermdp.component.css']
})
export class MonitermdpComponent implements OnInit {
  percent : string;

  listOfData: distributionData[] = [
    {
      pname: 'prod 1',
      oid: '0001',
      qty: 1000,
      sdate: '10/5/2021',
      fdate: '17/5/2021'
    },
    {
      pname: 'prod 1',
      oid: '0001',
      qty: 1000,
      sdate: '10/5/2021',
      fdate: '17/5/2021'
    },
    {
      pname: 'prod 1',
      oid: '0001',
      qty: 1000,
      sdate: '10/5/2021',
      fdate: '17/5/2021'
    },{
      pname: 'prod 1',
      oid: '0001',
      qty: 1000,
      sdate: '10/5/2021',
      fdate: '17/5/2021'
    }
    
  ];

  constructor() { }

  ngOnInit(): void {
    this.percent = "60";
  }

}
