import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/datatransfer.service';
import { ProductInfoData } from 'src/app/data_interfaces/ProductInfoData';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {

  constructor(private datatransfer : DatatransferService) { }

  listOfDataPInfo : ProductInfoData[];// for table
  /*
  listOfDataPInfo : ProductInfoData[] = [
    {
      pname: string;
    rmaterials: string;
    rmqty: string;
    ptime: string;
    }
   ];
  */
	
   ngOnInit(): void {
     this.datatransfer.getProductInfoTableData().subscribe( (data) => this.listOfDataPInfo = data );
     
  }

}
