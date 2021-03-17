import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/datatransfer.service';
import { supplierData } from 'src/app/data_interfaces/supplierData';

@Component({
  selector: 'app-supplierinfo',
  templateUrl: './supplierinfo.component.html',
  styleUrls: ['./supplierinfo.component.css']
})
export class SupplierinfoComponent implements OnInit {

  constructor(private datatransfer : DatatransferService) { }

  listOfDataSupplierInfo : supplierData[];

/*
 listOfDataSupplierInfo : supplierData[] = [
   {
    sname: 'eric desilva',
    mname: 'coloring 1',
    avgOtime: '10 days',
    mUp: '200'

  }
  ];
*/

  ngOnInit(): void {
   this.datatransfer.getSupplierInfoTableData().subscribe( (data) => this.listOfDataSupplierInfo = data);
  }

}
