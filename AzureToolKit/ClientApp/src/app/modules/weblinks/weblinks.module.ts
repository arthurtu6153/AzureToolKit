import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeblinksComponent } from './weblinks.component';
import { FormsModule } from '@angular/forms';
import { WeblinkDetailComponent } from './weblink-detail/weblink-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ShareModule } from 'src/app/share/share.module';
import { WeblinkRoutingModule } from './weblink-routing.module';
import { CustomerComponent } from 'src/app/customer/customer.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ShareModule,
    WeblinkRoutingModule,
  ],
  exports: [WeblinksComponent, WeblinkDetailComponent,CustomerComponent],
  declarations: [WeblinksComponent, WeblinkDetailComponent,CustomerComponent]
})
export class WeblinksModule { }
