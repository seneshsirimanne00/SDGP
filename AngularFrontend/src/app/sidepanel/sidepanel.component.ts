import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatatransferService } from '../datatransfer.service';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css']
})
export class SidepanelComponent implements OnInit {

  constructor(private router : Router ,private datatransfer : DatatransferService) { }

  ngOnInit(): void {
  }

  navigateToLeaguetable(){
    this.router.navigateByUrl("/leaguetable");
  }

  navigateToPlayedmatches(){
    this.router.navigateByUrl("/playedmatches");
  }

  navigateToRandommatch(){
    this.router.navigateByUrl("/randommatch");
  }

  navigateToConsole(){
    this.datatransfer.activateConsole().subscribe();
  }


}
