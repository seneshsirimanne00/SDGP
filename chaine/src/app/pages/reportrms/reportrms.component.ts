import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/datatransfer.service';
import { RMSReport_Data } from 'src/app/data_interfaces/RMSReport_Data';

@Component({
  selector: 'app-reportrms',
  templateUrl: './reportrms.component.html',
  styleUrls: ['./reportrms.component.css']
})
export class ReportrmsComponent implements OnInit {

  constructor( private datatransfer : DatatransferService) { }

  listOfDataRMSR : RMSReport_Data[];// for po table
  /*
  listOfDataRMSR : RMSReport_Data[] = [
    {
    mname: string;
    mid: string;
    vname: string;
    mqty: number;
    }
   ];
   */
	
   ngOnInit(): void {
     this.datatransfer.getRMSReportData().subscribe( (data) =>{ 
       this.listOfDataRMSR = data;
       console.log(data);
      });
     
  }

}
