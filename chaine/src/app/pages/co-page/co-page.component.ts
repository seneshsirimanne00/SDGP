import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/datatransfer.service';
import { poData } from 'src/app/data_interfaces/poData';


@Component({
  selector: 'app-co-page',
  templateUrl: './co-page.component.html',
  styleUrls: ['./co-page.component.css']
})
export class CoPageComponent implements OnInit {
  orderid :string;
  //variables for the form
  matName : String;
  vendorName : String;
  matQty : String;
  matPrice : String;


  constructor(private datatransfer : DatatransferService) { }

  //listOfData2 : poData[];// for po table
  
  listOfData2: poData[] = [
    {
      orderid: 1,
      mname: 'material 1',
      vname: 'John Brown',
      mqty: 32,
      mprice: 10000,
      totalMatPrice :2000
    }
  ];

  ngOnInit(): void {
    this.datatransfer.getPoTableData().subscribe( (data) => this.listOfData2 = data );
  }

  submitform(){
    console.log(" data going ");
    this.datatransfer.sendPurchaseOrderForm(this.matName,this.matQty,this.vendorName,this.matPrice).subscribe( (data) => this.listOfData2);
  }

  acceptPo(orderid){
    console.log(orderid)
    //this is the method made for the button in the po table
  }



}
