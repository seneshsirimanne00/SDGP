import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/datatransfer.service';
import { PDReport_Data } from 'src/app/data_interfaces/PDReport_Data';

@Component({
  selector: 'app-reportprodd',
  templateUrl: './reportprodd.component.html',
  styleUrls: ['./reportprodd.component.css']
})
export class ReportproddComponent implements OnInit {

  constructor(private datatransfer : DatatransferService) { }
  listOfDataPDR : PDReport_Data[];// for po table
  /*
  listOfDataPDR : PDReport_Data[] = [
    {
    oid: string;
    cid: string;
    daddress: string;
    ddate: string;
    status: string;
    }
   ];
  */
	
   ngOnInit(): void {
     this.datatransfer.getPDistributionReportData().subscribe( (data) => this.listOfDataPDR = data );
     
  }

}
