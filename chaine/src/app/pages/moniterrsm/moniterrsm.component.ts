import { Component, OnInit } from '@angular/core';
import { moniterRSM_Data } from 'src/app/data_interfaces/moniterRSM_Data[]';

@Component({
  selector: 'app-moniterrsm',
  templateUrl: './moniterrsm.component.html',
  styleUrls: ['./moniterrsm.component.css']
})
export class MoniterrsmComponent implements OnInit {

  constructor() { }

  //listOfDataRSM : moniterRSM_Data[];
//hardcoded for now
listOfDataRSM: moniterRSM_Data[] = [
  {
    mname: ' Material 1',
    qty: ' 50000 ',
    oid: '0001'

  },
  {
    mname: ' Material 1',
    qty: ' 50000 ',
    oid: '0001'

  },
  {
    mname: ' Material 1',
    qty: ' 50000 ',
    oid: '0001'

  },
  {
    mname: ' Material 1',
    qty: ' 50000 ',
    oid: '0001'

  }
];


  ngOnInit(): void {
  }

}
