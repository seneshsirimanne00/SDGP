import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoPageComponent } from './pages/co-page/co-page.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { WelcomepagemainComponent } from './pages/welcomepagemain/welcomepagemain.component';

const routes: Routes = [
  { path: '',
  component: WelcomeComponent
  },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'copage',component: CoPageComponent},
  { path: 'welcomepage',component:WelcomepagemainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
