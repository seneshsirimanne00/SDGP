import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidepanelComponent } from './sidepanel/sidepanel.component';
import { SidepanelprofileComponent } from './sidepanelprofile/sidepanelprofile.component';
import { SortbarComponent } from './sortbar/sortbar.component';
import { LeaguetableviewComponent } from './leaguetableview/leaguetableview.component';
import { PlayedmatchesviewComponent } from './playedmatchesview/playedmatchesview.component';
import { RandommatchviewComponent } from './randommatchview/randommatchview.component';
import { HttpClientModule } from '@angular/common/http';
import { DatatransferService } from './datatransfer.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidepanelComponent,
    SidepanelprofileComponent,
    SortbarComponent,
    LeaguetableviewComponent,
    PlayedmatchesviewComponent,
    RandommatchviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatatransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
