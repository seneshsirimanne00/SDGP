import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {

  constructor(private http : HttpClient) { }

  sendPurchaseOrderForm(rawMatName : String , matQty :String , supplierName : String , matPrice : String){
    var obj = rawMatName +"," + matQty +"," + supplierName +"," + matPrice
    console.log(obj);
    return this.http.post<string>( "http://127.0.0.1:5000/enter" , obj);
  }
    
}
