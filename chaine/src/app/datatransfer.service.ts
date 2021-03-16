import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { poData } from './data_interfaces/poData';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {

  constructor(private http : HttpClient) { }

  baseLocalhost : String = "http://127.0.0.1:5000/";

  sendPurchaseOrderForm(rawMatName : String , matQty :String , supplierName : String , matPrice : String){
    var obj = rawMatName +"," + matQty +"," + supplierName +"," + matPrice
    console.log(obj);
    return this.http.post<string>( this.baseLocalhost + "enter" , obj);
    
  }

  getPoTableData(){
    return this.http.get<poData[]>(this.baseLocalhost + "getPoData")
  }
    
}
