import { Component, OnInit } from '@angular/core';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

interface poData {
  mname: string;
  vname: string;
  mqty: number;
  mprice: number;
}

@Component({
  selector: 'app-co-page',
  templateUrl: './co-page.component.html',
  styleUrls: ['./co-page.component.css']
})
export class CoPageComponent implements OnInit {
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
  

  constructor() { }

  ngOnInit(): void {
    
  }

}
