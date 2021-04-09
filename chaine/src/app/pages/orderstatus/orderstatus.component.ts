import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/datatransfer.service';
import { OrederStatus_Data } from 'src/app/data_interfaces/OrderStatus_Data';

@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css']
})
export class OrderstatusComponent implements OnInit {

  percent1 : string;
  oid:String;

  listOfDataos : OrederStatus_Data[];
  
  constructor(private datatransfer : DatatransferService) { 
  }

  ngOnInit(): void {
    this.percent1 = "0";
    this.oid = "blank"; 
    this.updateTable();
  }

  showpercentage(orderid){
    this.oid=orderid
    console.log("Clicked Order Id : " + orderid);
    this.datatransfer.OrderStatuspercentagedata(orderid).subscribe();
    this.updatePercentage();
  }

  updateTable(){
    this.datatransfer.getOrderStatusTableData().subscribe( (data) => this.listOfDataos = data);
  }

  updatePercentage(){
    this.datatransfer.OrderStatuspercentagedata(this.oid).subscribe( (data) =>{
      this.percent1 = data;
      this.updateTable();
      if(this.percent1 != "100"){
        this.updatePercentage();
      }
    })
  }




}
