import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMReport_Data } from './data_interfaces/IMReport_Data';
import { moniterDP_Data } from './data_interfaces/moniterDP_data';
import { moniterPP_Data } from './data_interfaces/moniterPP_Data';
import { moniterRSM_Data } from './data_interfaces/moniterRSM_Data[]';
import { poData } from './data_interfaces/poData';
import { prData } from './data_interfaces/prData';
import { supplierData } from './data_interfaces/supplierData';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {

  constructor(private http : HttpClient) { }

  baseLocalhost : String = "http://127.0.0.1:5000/";

  sendPurchaseOrderForm(rawMatName : String , matQty :String , supplierName : String , matPrice : String){
    var obj = rawMatName +"," + matQty +"," + supplierName +"," + matPrice
    console.log(obj); 
    return this.http.post<string>( this.baseLocalhost + "addPoRequest" , obj);
    
  }

  sendNewSupplierForm(supplierName : String , orderTime : String , matName : String , matUnitPrice : String){
    var obj = supplierName +","+ matName +","+ orderTime +","+ matUnitPrice;
    return this.http.post<string>(this.baseLocalhost + "createSupplier" , obj);
  }

  getPoTableData(){
    return this.http.get<poData[]>(this.baseLocalhost + "getPoData");
  }

  getPrTableData(){
    return this.http.get<prData[]>(this.baseLocalhost + "getPrData");
  }

  getMoniterDPtableData(){
    return this.http.get<moniterDP_Data[]>(this.baseLocalhost + "getMoniterDPtableData");
  }

  getMoniterPPTableData(){
    return this.http.get<moniterPP_Data[]>(this.baseLocalhost + "getMoniterPPTableData");
  }

  getMoniterRSMTableData(){
    return this.http.get<moniterRSM_Data[]>(this.baseLocalhost + "getMoniterRSMTableData");
  }

  getSupplierInfoTableData(){
    return this.http.get<supplierData[]>(this.baseLocalhost + "getSupplierInfoTableData");
  }

  //rports
  getIMReportData(){
    return this.http.get<IMReport_Data[]>(this.baseLocalhost + "getIMReportData");
  }
    
}
