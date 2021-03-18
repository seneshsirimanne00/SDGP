import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/datatransfer.service';
import { RMStatusData } from 'src/app/data_interfaces/RMStatusData';

@Component({
  selector: 'app-rmstatus',
  templateUrl: './rmstatus.component.html',
  styleUrls: ['./rmstatus.component.css']
})
export class RmstatusComponent implements OnInit {

  constructor(private datatransfer : DatatransferService) { }

  listOfDataRMStatus : RMStatusData[];// for table
  /*
  listOfDataRMStatus : RMStatusData[] = [
    {
      mname: string;
    mid: string;
    vname: string;
    vid: string;
    mqty: string;
    odate: string;
    edate: string;
    eprice: string;
    }
   ];
  */
	
   ngOnInit(): void {
     this.datatransfer.getRawMaterialStatusData().subscribe( (data) => this.listOfDataRMStatus = data );
     
  }

}
