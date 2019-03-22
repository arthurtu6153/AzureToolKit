import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WeblinksComponent } from './weblinks.component';
import { WeblinkDetailComponent } from './weblink-detail/weblink-detail.component';

const routes: Routes = [
  { path: 'weblinks', component: WeblinksComponent},
  { path: 'detail/:id', component: WeblinkDetailComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)] ,
  exports: [ RouterModule]  
})
export class WeblinkRoutingModule { }
