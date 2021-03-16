import { Component, OnInit } from '@angular/core';
import { DatatransferService } from 'src/app/datatransfer.service';
import { poData } from 'src/app/data_interfaces/poData';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}


@Component({
  selector: 'app-co-page',
  templateUrl: './co-page.component.html',
  styleUrls: ['./co-page.component.css']
})
export class CoPageComponent implements OnInit {

  matName : String;
  vendorName : String;
  matQty : Number;
  matPrice : Number;

  constructor(private datatransfer : DatatransferService) { }

  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  listOfData2 : poData[];
  /*
  listOfData2: poData[] = [
    {
      mname: 'material 1',
      vname: 'John Brown',
      mqty: 32,
      mprice: 10000
    },
    {
      mname: 'material 1',
      vname: 'John Brown',
      mqty: 32,
      mprice: 10000
    },
    {
      mname: 'material 1',
      vname: 'John Brown',
      mqty: 32,
      mprice: 10000
    },
    {
      mname: 'material 1',
      vname: 'John Brown',
      mqty: 32,
      mprice: 10000
    },
    {
      mname: 'material 1',
      vname: 'John Brown',
      mqty: 32,
      mprice: 10000
    },
    {
      mname: 'material 1',
      vname: 'John Brown',
      mqty: 32,
      mprice: 10000
    },
    {
      mname: 'material 1',
      vname: 'John Brown',
      mqty: 32,
      mprice: 10000
    },
    {
      mname: 'material 1',
      vname: 'John Brown',
      mqty: 32,
      mprice: 10000
    },
    {
      mname: 'material 1',
      vname: 'John Brown',
      mqty: 32,
      mprice: 10000
    },
    {
      mname: 'material 1',
      vname: 'John Brown',
      mqty: 32,
      mprice: 10000
    },
    {
      mname: 'material 1',
      vname: 'John Brown',
      mqty: 32,
      mprice: 10000
    },
    {
      mname: 'material 1',
      vname: 'John Brown',
      mqty: 32,
      mprice: 10000
    }
  ];
  */
  

  ngOnInit(): void {
    this.datatransfer.getPoTableData().subscribe( (data) => this.listOfData2 = data )
  }



}
