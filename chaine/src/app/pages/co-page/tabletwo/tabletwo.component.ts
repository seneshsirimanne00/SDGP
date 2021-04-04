import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/datatransfer.service';
import { prData } from 'src/app/data_interfaces/prData';

@Component({
  selector: 'app-tabletwo',
  templateUrl: './tabletwo.component.html',
  styleUrls: ['./tabletwo.component.css']
})
export class TabletwoComponent implements OnInit {

  constructor(private datatransfer : DatatransferService) { }

listOfData1 : prData[];//for pr table
/*
  listOfData1: prData[] = [
  {
    mnamepr: 'material 5',
    vnamepr: 'Jane Brown',
    mqtypr: 68,
    mpricepr: 20000,
    orderid:1005,
    totalMatPrice :500,
  },
  {
    mnamepr: 'material 6',
    vnamepr: 'adam evans',
    mqtypr: 50,
    mpricepr: 50000,
    orderid:1006,
    totalMatPrice :1000,
  }
  ]; 
*/
  ngOnInit(): void {
     this.datatransfer.getPrTableData().subscribe( (data) => this.listOfData1 = data );
     
  }

}
