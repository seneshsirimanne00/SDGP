import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/datatransfer.service';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {

  searchtxt : String;

  constructor(private dataService : DatatransferService) { }

  ngOnInit(): void {
  }

  updateAllPredictions(){
    this.dataService.predictAll().subscribe();
  }
  

}

