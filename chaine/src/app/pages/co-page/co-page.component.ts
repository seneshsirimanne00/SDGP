import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/datatransfer.service';
import { poData } from 'src/app/data_interfaces/poData';


@Component({
  selector: 'app-co-page',
  templateUrl: './co-page.component.html',
  styleUrls: ['./co-page.component.css']
})
export class CoPageComponent implements OnInit {
  orderidaccept :string;
  
  //variables for the form
  matName : String;
  vendorName : String;
  matQty : String;


  constructor(private datatransfer : DatatransferService) { }

 listOfData2 : poData[];// for po table
  /*
  listOfData2: poData[] = [
    {
      orderid: 1,
      mname: 'material 1',
      vname: 'John Brown',
      mqty: 32,
      mprice: 10000,
      totalMatPrice :2000
    },
    {
      orderid: 69,
      mname: 'material 1',
      vname: 'John Brown',
      mqty: 32,
      mprice: 10000,
      totalMatPrice :2000
    },
    {
      orderid: 420,
      mname: 'material 1',
      vname: 'John Brown',
      mqty: 32,
      mprice: 10000,
      totalMatPrice :2000
    }
  ];
*/
  ngOnInit(): void {
    this.updatePoTable();
  }

  updatePoTable(){
    this.datatransfer.getPoTableData().subscribe( (data) => this.listOfData2 = data );
  }

  submitform(){
    this.datatransfer.sendPurchaseOrderForm(this.matName,this.matQty,this.vendorName).subscribe((data) =>{
      this.updatePoTable();
    });
  }
  
  acceptedOnce : boolean = false;
  acceptPo(orderidaccept){
    if(!this.acceptedOnce){
      alert("Navigate to Order Status in sidebar to check progress in your order no "+orderidaccept);
      this.acceptedOnce = true;
    }
    
    console.log(orderidaccept)
    //this is the method made for the button in the po table
    this.datatransfer.confirmPoOrder(orderidaccept).subscribe( (data) =>{
      this.updatePoTable();
    });
  }



}
