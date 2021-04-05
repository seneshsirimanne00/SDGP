import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/datatransfer.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private datatransfer : DatatransferService) { }

  ngOnInit(): void {
    
  }

}
