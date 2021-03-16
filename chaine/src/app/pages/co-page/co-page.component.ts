import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/datatransfer.service';
import { poData } from 'src/app/data_interfaces/poData';
import { prData } from 'src/app/data_interfaces/prData';

@Component({
  selector: 'app-co-page',
  templateUrl: './co-page.component.html',
  styleUrls: ['./co-page.component.css']
})
export class CoPageComponent implements OnInit {



  //variables for the form
  matName : String;
  vendorName : String;
  matQty : String;
  matPrice : String;


  constructor(private datatransfer : DatatransferService) { }


  listOfData2 : poData[];// for po table

  //listOfData1 : prData[];//for pr table




  
  listOfData1: prData[] = [
    {
      mnamepr: 'material 1',
      vnamepr: 'John Brown',
      mqtypr: 32,
      mpricepr: 10000
    },
    {
      mnamepr: 'material 1',
      vnamepr: 'John Brown',
      mqtypr: 32,
      mpricepr: 10000
    },
    {
      mnamepr: 'material 1',
      vnamepr: 'John Brown',
      mqtypr: 32,
      mpricepr: 10000
    },
    {
      mnamepr: 'material 1',
      vnamepr: 'John Brown',
      mqtypr: 32,
      mpricepr: 10000
    }
    
  ];
  
  

  ngOnInit(): void {
    this.datatransfer.getPoTableData().subscribe( (data) => this.listOfData2 = data );
    this.datatransfer.getPrTableData().subscribe( (data) => this.listOfData1 = data );
  }

  submitform(){
    console.log(" data going ");
    this.datatransfer.sendPurchaseOrderForm(this.matName,this.matQty,this.vendorName,this.matPrice).subscribe( (data) => this.listOfData2);
  }



}
