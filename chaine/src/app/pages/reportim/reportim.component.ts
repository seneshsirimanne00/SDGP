import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/datatransfer.service';
import { IMReport_Data } from 'src/app/data_interfaces/IMReport_Data';

@Component({
  selector: 'app-reportim',
  templateUrl: './reportim.component.html',
  styleUrls: ['./reportim.component.css']
})
export class ReportimComponent implements OnInit {

  constructor(private datatransfer : DatatransferService) { }

 // listOfDataIMR :IMReport_Data[];
//hardcoded for now
listOfDataIMR :IMReport_Data[] = [
  {
    mname:'Mudith Jayasanka' ,
    mid: '0001',
    qty:  1000 ,
    vid: '20/11/2021',
    adate:'28/11/2021'
  }
];

  ngOnInit(): void {
    this.datatransfer.getIMReportData().subscribe( (data) => this.listOfDataIMR = data );
  }

}
