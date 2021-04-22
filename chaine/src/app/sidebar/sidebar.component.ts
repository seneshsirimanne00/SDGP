import { Component, OnInit } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { DatatransferService } from '../datatransfer.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  companyname :String;
  companyslogan:String;
  username:String;

  isCollapsed = true;

  constructor(private datatransfer : DatatransferService) { }

  ngOnInit(): void {
    this.companyname = "Company Name";
    this.companyslogan = "slogan";
    this.username="User Name";
  }

  save(){
    this.datatransfer.saveData().subscribe();
  }
  

}

