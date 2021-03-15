import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { hi_IN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import hi from '@angular/common/locales/hi';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CoPageComponent } from './pages/co-page/co-page.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { LayoutModule } from '@angular/cdk/layout';
import { WelcomepagemainComponent } from './pages/welcomepagemain/welcomepagemain.component';
import { SalesOrderComponent } from './pages/sales-order/sales-order.component';
import { MoniterppComponent } from './pages/moniterpp/moniterpp.component';
import { MonitermdpComponent } from './pages/monitermdp/monitermdp.component';
import { PredictionComponent } from './pages/prediction/prediction.component';
import { RmstatusComponent } from './pages/rmstatus/rmstatus.component';
import { OrderstatusComponent } from './pages/orderstatus/orderstatus.component';
import { MoniterrsmComponent } from './pages/moniterrsm/moniterrsm.component';
import { ReportimComponent } from './pages/reportim/reportim.component';
import { ReportrmsComponent } from './pages/reportrms/reportrms.component';
import { ReportprodComponent } from './pages/reportprod/reportprod.component';
import { ReportproddComponent } from './pages/reportprodd/reportprodd.component';
import { ReportsalesforecastComponent } from './pages/reportsalesforecast/reportsalesforecast.component';
import { SupplierinfoComponent } from './pages/supplierinfo/supplierinfo.component';
import { ProductinfoComponent } from './pages/productinfo/productinfo.component';
import { ReportrmrforecastComponent } from './pages/reportrmrforecast/reportrmrforecast.component';
import {ProgressBarModule} from "angular-progress-bar";
import { LinechartComponent } from './linechart/linechart.component';
import { BarchartComponent } from './barchart/barchart.component';



registerLocaleData(hi);

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CoPageComponent,
    WelcomepagemainComponent,
    SalesOrderComponent,
    MoniterppComponent,
    MonitermdpComponent,
    PredictionComponent,
    RmstatusComponent,
    OrderstatusComponent,
    MoniterrsmComponent,
    ReportimComponent,
    ReportrmsComponent,
    ReportprodComponent,
    ReportproddComponent,
    ReportsalesforecastComponent,
    SupplierinfoComponent,
    ProductinfoComponent,
    ReportrmrforecastComponent,
    LinechartComponent,
    BarchartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzTableModule,
    NzLayoutModule,
    NzMenuModule,
    ProgressBarModule,
    LayoutModule
  ],
  providers: [{ provide: NZ_I18N, useValue: hi_IN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
