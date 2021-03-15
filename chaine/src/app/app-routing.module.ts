import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoPageComponent } from './pages/co-page/co-page.component';
import { MonitermdpComponent } from './pages/monitermdp/monitermdp.component';
import { MoniterppComponent } from './pages/moniterpp/moniterpp.component';
import { MoniterrsmComponent } from './pages/moniterrsm/moniterrsm.component';
import { OrderstatusComponent } from './pages/orderstatus/orderstatus.component';
import { PredictionComponent } from './pages/prediction/prediction.component';
import { ProductinfoComponent } from './pages/productinfo/productinfo.component';
import { ReportimComponent } from './pages/reportim/reportim.component';
import { ReportprodComponent } from './pages/reportprod/reportprod.component';
import { ReportproddComponent } from './pages/reportprodd/reportprodd.component';
import { ReportrmrforecastComponent } from './pages/reportrmrforecast/reportrmrforecast.component';
import { ReportrmsComponent } from './pages/reportrms/reportrms.component';
import { ReportsalesforecastComponent } from './pages/reportsalesforecast/reportsalesforecast.component';
import { RmstatusComponent } from './pages/rmstatus/rmstatus.component';
import { SalesOrderComponent } from './pages/sales-order/sales-order.component';
import { SupplierinfoComponent } from './pages/supplierinfo/supplierinfo.component';
import { WelcomepagemainComponent } from './pages/welcomepagemain/welcomepagemain.component';

const routes: Routes = [
  { path: '',redirectTo:"/welcomepage" , pathMatch:"full"},
  { path: 'copage',component: CoPageComponent},
  { path: 'welcomepage',component:WelcomepagemainComponent},
  { path: 'moniterrsm',component:MoniterrsmComponent},
  { path: 'moniterpp',component:MoniterppComponent},
  { path: 'moniterdp',component:MonitermdpComponent},
  { path: 'prediction',component:PredictionComponent},
  { path: 'salesorder',component:SalesOrderComponent},
  { path: 'rawmaterialstatus',component:RmstatusComponent},
  { path: 'orderstatus',component:OrderstatusComponent},
  { path: 'supplierinfo',component:SupplierinfoComponent},
  { path: 'imreport',component:ReportimComponent},
  { path: 'rmsupplyreport',component:ReportrmsComponent},
  { path: 'productionreport',component:ReportprodComponent},
  { path: 'productdistributionreport',component:ReportproddComponent},
  { path: 'salesforcastreport',component:ReportsalesforecastComponent},
  { path: 'productinfo',component:ProductinfoComponent},
  { path: 'rawmaterialrequirementforecastreport',component:ReportrmrforecastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
