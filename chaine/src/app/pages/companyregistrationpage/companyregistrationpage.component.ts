import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/datatransfer.service';

@Component({
  selector: 'app-companyregistrationpage',
  templateUrl: './companyregistrationpage.component.html',
  styleUrls: ['./companyregistrationpage.component.css']
})
export class CompanyregistrationpageComponent implements OnInit {

  constructor(private datatransfer : DatatransferService) { }

  ngOnInit(): void {
  }

  submitform(){
    //this.datatransfer.sendPurchaseOrderForm(this.matName,this.matQty,this.vendorName).subscribe();
  console.log("heloooo");
  }

}
