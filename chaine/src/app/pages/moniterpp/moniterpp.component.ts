import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/datatransfer.service';
import { moniterPP_Data } from 'src/app/data_interfaces/moniterPP_Data';

@Component({
  selector: 'app-moniterpp',
  templateUrl: './moniterpp.component.html',
  styleUrls: ['./moniterpp.component.css']
})
export class MoniterppComponent implements OnInit {
  percent: string = "0";
  constructor(private datatransfer: DatatransferService) { }

  listOfDataMPP : moniterPP_Data[];

  //hardcoded for now

  // listOfDataMPP: moniterPP_Data[] = [
  //   {
  //     pName: 'Mudith Jayasanka',
  //     oId: '0001',
  //     mQty: 'Venura rajapaksha',
  //   }
  // ];


  ngOnInit(): void {
    this.loadTableData();
  }

  loadTableData(){
    this.datatransfer.getMoniterPPTableData().subscribe( (data) => this.listOfDataMPP = data );
  }

  track(prodId : string){
    console.log("Passing Order ID : " + prodId);
    this.datatransfer.getProductStatusPercentage(prodId).subscribe((data)=>{
      this.loadTableData();
      this.percent = data;
      if(this.percent != "100"){
        this.track(prodId);
      }
    });
  }

}
