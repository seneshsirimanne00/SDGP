import { Component, OnInit } from '@angular/core';
import { FootballClub } from '../dataStructure/FootballClub';
import { DatatransferService } from '../datatransfer.service';

@Component({
  selector: 'app-leaguetableview',
  templateUrl: './leaguetableview.component.html',
  styleUrls: ['./leaguetableview.component.css']
})
export class LeaguetableviewComponent implements OnInit {

  tableData : FootballClub;

  constructor(private dataservice : DatatransferService) { }

  ngOnInit(): void {
    this.dataservice.getLeagueTable().subscribe( (data) => this.tableData = data );
  }

  setTableData(data : FootballClub){
    this.tableData = data;
  }

}
