import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/datatransfer.service';
import { RMRFReport_Data } from 'src/app/data_interfaces/RMRFReport_Data';
import { RMSReport_Data } from 'src/app/data_interfaces/RMSReport_Data';

@Component({
  selector: 'app-reportrmrforecast',
  templateUrl: './reportrmrforecast.component.html',
  styleUrls: ['./reportrmrforecast.component.css']
})
export class ReportrmrforecastComponent implements OnInit {

  constructor(private datatransfer : DatatransferService) { }

  listOfDataRMRF : RMRFReport_Data[];// for table
  /*
  listOfDataRMRF : RMRFReport_Data[] = [
    {
      date: string;
      pid: string;
      rmid: number;
      qty: string;
    }
   ];
  */
	
   ngOnInit(): void {
     this.datatransfer.getRMRForecastReportData().subscribe( (data) => this.listOfDataRMRF = data );
     
  }

}
