import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/datatransfer.service';
import { prData } from 'src/app/data_interfaces/prData';

@Component({
  selector: 'app-tabletwo',
  templateUrl: './tabletwo.component.html',
  styleUrls: ['./tabletwo.component.css']
})
export class TabletwoComponent implements OnInit {

  constructor(private datatransfer : DatatransferService) { }

listOfData1 : prData[];//for pr table
/*
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
    }
  ]; */

  ngOnInit(): void {
     this.datatransfer.getPrTableData().subscribe( (data) => this.listOfData1 = data );
     
  }

}
