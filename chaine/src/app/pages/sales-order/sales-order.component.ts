import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/datatransfer.service';
import { salesOrderData } from 'src/app/data_interfaces/salesOrderData';

@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.css']
})
export class SalesOrderComponent implements OnInit {

  constructor(private datatransfer : DatatransferService) { }

  listOfDataSalesOrder : salesOrderData[];// for table
  /*
  listOfDataSalesOrder : salesOrderData[] = [
    {
    cname: string;
    cid: string;
    pname: string;
    qty: string;
    daddress: string;
    oid: string;
    odate: string;
    adtime: string;
    }
   ];
  */
	
   ngOnInit(): void {
     this.datatransfer.getSalesOrderTableData().subscribe( (data) => this.listOfDataSalesOrder = data );
     
  }

}
