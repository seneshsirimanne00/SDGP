import { Component, OnInit } from '@angular/core';
import { Match } from '../dataStructure/Match';
import { DatatransferService } from '../datatransfer.service';

@Component({
  selector: 'app-randommatchview',
  templateUrl: './randommatchview.component.html',
  styleUrls: ['./randommatchview.component.css']
})
export class RandommatchviewComponent implements OnInit {

  winText : String;

  clubNameOne: String;
  clubNameTwo: String;

  clubOneGoals: String;
  clubTwoGoals: String;

  match : any;

  constructor(private datatransfer : DatatransferService) { }

  ngOnInit(): void {
  }


  getRandom(){
    this.datatransfer.getRandomMatch().subscribe( (data) => {
      this.match = data;
      this.clubNameOne = this.match.clubNameOne;
      this.clubNameTwo = this.match.clubNameTwo;
      this.clubOneGoals = this.match.clubOneGoals;
      this.clubTwoGoals = this.match.clubTwoGoals;
      this.winText = this.match.winText;
    });
    
  }

}
