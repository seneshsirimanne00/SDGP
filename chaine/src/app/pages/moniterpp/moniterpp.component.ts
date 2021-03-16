import { Component, OnInit } from '@angular/core';
import { moniterPP_Data } from 'src/app/data_interfaces/moniterPP_Data';

@Component({
  selector: 'app-moniterpp',
  templateUrl: './moniterpp.component.html',
  styleUrls: ['./moniterpp.component.css']
})
export class MoniterppComponent implements OnInit {
  percent : string;
  constructor() { }

  //listOfDataMDP : moniterPP_Data[];
//hardcoded for now
listOfDataMPP: moniterPP_Data[] = [
  {
    pName:'Mudith Jayasanka' ,
    mId: '0001',
    vName:'Venura rajapaksha' ,
    vId: '001',
    mQty:'2000' ,

  },
  {
    pName:'Mudith Jayasanka' ,
    mId: '0001',
    vName:'Venura rajapaksha' ,
    vId: '001',
    mQty:'2000' ,

  },
  {
    pName:'Mudith Jayasanka' ,
    mId: '0001',
    vName:'Venura rajapaksha' ,
    vId: '001',
    mQty:'2000' ,

  },
  {
    pName:'Mudith Jayasanka' ,
    mId: '0001',
    vName:'Venura rajapaksha' ,
    vId: '001',
    mQty:'2000' ,

  }
];

  ngOnInit(): void {
    this.percent = "60";
  }

  debugger(){
    console.log("hooooo");
  }
}
