import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/datatransfer.service';
import { SFReport_Data } from 'src/app/data_interfaces/SFReport_Data';

@Component({
  selector: 'app-reportsalesforecast',
  templateUrl: './reportsalesforecast.component.html',
  styleUrls: ['./reportsalesforecast.component.css']
})
export class ReportsalesforecastComponent implements OnInit {

  constructor(private datatransfer : DatatransferService) { }

  listOfDataSFR : SFReport_Data[];// for table
  /*
  listOfDataSFR : SFReport_Data[] = [
    {
    date: string;
    pname: string;
    pid: number;
    pqty: string;
    }
   ];
  */

   ngOnInit(): void {
    this.datatransfer.getSalesForecastReportData().subscribe( (data) => this.listOfDataSFR= data );
    
 }

}
