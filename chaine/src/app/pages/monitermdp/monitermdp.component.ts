import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/datatransfer.service';
import { moniterDP_Data } from 'src/app/data_interfaces/moniterDP_data';

@Component({
  selector: 'app-monitermdp',
  templateUrl: './monitermdp.component.html',
  styleUrls: ['./monitermdp.component.css']
})
export class MonitermdpComponent implements OnInit {
  percent : string;

  listOfDataMDP : moniterDP_Data[];
 /* 
  //hardcoded for now
  listOfDataMDP: moniterDP_Data[] = [
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
    
  ]; */

  constructor(private datatransfer : DatatransferService) { }

  ngOnInit(): void {
    this.percent = "60";

   this.datatransfer.getMoniterDPtableData().subscribe( (data) => this.listOfDataMDP = data);
  }
  

}
