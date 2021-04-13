import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/datatransfer.service';
import { salesOrderData } from 'src/app/data_interfaces/salesOrderData';

@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.css']
})
export class SalesOrderComponent implements OnInit {


  // variables for form
   
  customername : string;
  productname : string;
  deliveryaddress: string;
  qty : string;
  orderdate: string;


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
     this.loadTable();
  }

  loadTable(){
    this.datatransfer.getSalesOrderTableData().subscribe( (data) => this.listOfDataSalesOrder = data );
  }

  submitForm(){
    this.datatransfer.sendNewSalesOrderForm(this.customername,this.productname,this.deliveryaddress,this.qty,this.orderdate).subscribe( (data) =>{
      this.loadTable()
    } );
  }

  confirmProductionOrder(id : string){
    console.log("Confirmed ID : "  + id);
    this.datatransfer.confirmProdOrder(id).subscribe( (data) => {
      this.loadTable();
    })
  }

}
