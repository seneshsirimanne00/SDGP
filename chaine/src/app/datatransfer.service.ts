import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMReport_Data } from './data_interfaces/IMReport_Data';
import { moniterDP_Data } from './data_interfaces/moniterDP_data';
import { moniterPP_Data } from './data_interfaces/moniterPP_Data';
import { moniterRSM_Data } from './data_interfaces/moniterRSM_Data';
import { PDReport_Data } from './data_interfaces/PDReport_Data';
import { poData } from './data_interfaces/poData';
import { prData } from './data_interfaces/prData';
import { prodReport_Data } from './data_interfaces/ProdReport_Data';
import { ProductInfoData } from './data_interfaces/ProductInfoData';
import { RMRFReport_Data } from './data_interfaces/RMRFReport_Data';
import { RMSReport_Data } from './data_interfaces/RMSReport_Data';
import { RMStatusData } from './data_interfaces/RMStatusData';
import { salesOrderData } from './data_interfaces/salesOrderData';
import { SFReport_Data } from './data_interfaces/SFReport_Data';
import { supplierData } from './data_interfaces/supplierData';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {

  constructor(private http : HttpClient) { }

  baseLocalhost : String = "http://127.0.0.1:5000/";

  sendPurchaseOrderForm(rawMatName : String , matQty :String , supplierName : String ){
    var obj = rawMatName +"," + matQty +"," + supplierName 
    console.log(obj); 
    return this.http.post<string>( this.baseLocalhost + "addPoRequest" , obj);
    
  }

  sendNewSupplierForm(supplierName : String , orderTime : String , matName : String , matUnitPrice : String){
    var obj = supplierName +","+ matName +","+ orderTime +","+ matUnitPrice;
    return this.http.post<string>(this.baseLocalhost + "createSupplier" , obj);
  }

  sendNewSalesOrderForm(customername : string,productname : string,deliveryaddress: string,qty : string,orderdate : string){
    var obj = customername +","+ productname +","+ deliveryaddress +","+ qty +","+ orderdate;
    return this.http.post<string>(this.baseLocalhost + "createNewSalesOrder" , obj);
  }

  sendNewProductForm( Productname : string ,rawmaterils :string,prodtime:string,rawmaterialqty : string){
    var obj = Productname +","+ rawmaterils +","+ prodtime +","+ rawmaterialqty;
    return this.http.post<string>(this.baseLocalhost + "createNewProduct" , obj);
  }

  sendlinechartsearchdata( search : String ){
    var obj = search;
    return this.http.post<string>(this.baseLocalhost + "searchtxt" , obj);
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
    return this.http.get<moniterRSM_Data[]>(this.baseLocalhost + "getMonitorRSMTableData");
  }

  //reports
  getIMReportData(){
    return this.http.get<IMReport_Data[]>(this.baseLocalhost + "getIMReportData");
  }

  getRMSReportData(){
    return this.http.get<RMSReport_Data[]>(this.baseLocalhost + "getRMSReportData");
  }

  getPReportData(){
    return this.http.get<prodReport_Data[]>(this.baseLocalhost + "getPReportData");
  }

  getPDistributionReportData(){
    return this.http.get<PDReport_Data[]>(this.baseLocalhost + " getPDistributionReportData");
  }

  getSalesForecastReportData(){
    return this.http.get<SFReport_Data[]>(this.baseLocalhost + "getSalesForecastReportData");
  }

  getRMRForecastReportData(){
    return this.http.get<RMRFReport_Data[]>(this.baseLocalhost + "getRMRForecastReportData");
  }
   
  // pages
  getSalesOrderTableData(){
    return this.http.get<salesOrderData[]>(this.baseLocalhost + "getSalesOrderTableData");
  }

  getRawMaterialStatusData(){
    return this.http.get<RMStatusData[]>(this.baseLocalhost + "getRawMaterialStatusData");
  }

  getProductInfoTableData(){
    return this.http.get<ProductInfoData[]>(this.baseLocalhost + "getProductInfoTableData");
  }

  getSupplierInfoTableData(){
    return this.http.get<supplierData[]>(this.baseLocalhost + "getSupplierInfoTableData");
  }

  confirmPoOrder(orderId : number){
    return this.http.post<number>(this.baseLocalhost + "confirmPO" , orderId)
  }

  getlinegraphXData(){
    return this.http.get<String[]>(this.baseLocalhost + "getlinegraphXData");
  }

  getlinegraphYData(){
    return this.http.get<number[]>(this.baseLocalhost + "getlinegraphYData");
  }

  getbargraphXData(){
    return this.http.get<String[]>(this.baseLocalhost + "getbargraphXData");
  }

  getbargraphYData(){
    return this.http.get<number[]>(this.baseLocalhost + "getbargraphYData");
  }
    
}
