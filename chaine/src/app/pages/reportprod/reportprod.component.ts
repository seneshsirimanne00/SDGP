import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/datatransfer.service';
import { prodReport_Data } from 'src/app/data_interfaces/ProdReport_Data';

@Component({
  selector: 'app-reportprod',
  templateUrl: './reportprod.component.html',
  styleUrls: ['./reportprod.component.css']
})
export class ReportprodComponent implements OnInit {

  constructor(private datatransfer:DatatransferService) { }

  //listOfDataPR: prodReport_Data[];

//hardcoded for now
listOfDataPR: prodReport_Data[]  = [
  {
    pname:'prod 1',
    qty: '200',
    oid: '0002',
    cid: '001',
    odate: '20/11/2021',
    edate: '28/11/2021',
    status: 'completed'
  }
];
  ngOnInit(): void {
  }

}
