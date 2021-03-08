import { Component, OnInit } from '@angular/core';
import { DatatransferService } from '../datatransfer.service';
import { LeaguetableviewComponent } from '../leaguetableview/leaguetableview.component';

@Component({
  selector: 'app-sortbar',
  templateUrl: './sortbar.component.html',
  styleUrls: ['./sortbar.component.css']
})
export class SortbarComponent implements OnInit {

  constructor(private datatransfer : DatatransferService , private ltv : LeaguetableviewComponent) { }

  ngOnInit(): void {
  }

  sortWins(){
    this.datatransfer.getSortedByWins().subscribe( (data) => this.ltv.setTableData(data) );
  }

  sortPoints(){
    this.datatransfer.getSortedByPoints().subscribe( (data) => this.ltv.setTableData(data) );
  }

  sortGoals(){
    this.datatransfer.getSortedByGoals().subscribe( (data) => this.ltv.setTableData(data) ); 
  }

}
