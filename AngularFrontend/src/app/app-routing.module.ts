import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaguetableviewComponent } from './leaguetableview/leaguetableview.component';
import { PlayedmatchesviewComponent } from './playedmatchesview/playedmatchesview.component';
import { RandommatchviewComponent } from './randommatchview/randommatchview.component';

const routes: Routes = [
  {path:"",redirectTo:"/leaguetable" , pathMatch:"full"},
  {path:"leaguetable",component:LeaguetableviewComponent},
  {path:"randommatch",component:RandommatchviewComponent},
  {path:"playedmatches",component:PlayedmatchesviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
