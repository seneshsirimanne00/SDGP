import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/datatransfer.service';


@Component({
  selector: 'app-companyprofilepage',
  templateUrl: './companyprofilepage.component.html',
  styleUrls: ['./companyprofilepage.component.css']
})
export class CompanyprofilepageComponent implements OnInit {

  constructor(private datatransfer : DatatransferService){ }

  ngOnInit(): void {
  }

  
}

