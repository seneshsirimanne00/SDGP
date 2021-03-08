import { Component, OnInit } from '@angular/core';
import { Match } from '../dataStructure/Match';
import { DatatransferService } from '../datatransfer.service';

@Component({
  selector: 'app-playedmatchesview',
  templateUrl: './playedmatchesview.component.html',
  styleUrls: ['./playedmatchesview.component.css']
})
export class PlayedmatchesviewComponent implements OnInit {

  matches : Match;
  search : any;

  constructor(private datatransfer : DatatransferService) { }

  ngOnInit(): void {
    this.datatransfer.getMatches().subscribe( (data) => this.matches = data );
  }

  searchDate(){
    this.datatransfer.filterByDate(this.search).subscribe( (data) => this.matches = data);
  }

  consoleLog(){
    console.log(this.matches);
  }
}
