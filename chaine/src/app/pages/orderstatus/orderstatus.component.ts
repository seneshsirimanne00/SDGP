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
    this.percent1 = "69";

  }

  showpercentage(orderid){
    this.oid=orderid;
    this.datatransfer.OrderStatuspercentagedata(orderid).subscribe();
    this.datatransfer.getOrderStatusTableData().subscribe( (data) => this.listOfDataos = data);
    
  }


}
