import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeblinksComponent } from './weblinks.component';
import { FormsModule } from '@angular/forms';
import { WeblinkDetailComponent } from './weblink-detail/weblink-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [WeblinksComponent, WeblinkDetailComponent],
  declarations: [WeblinksComponent, WeblinkDetailComponent]
})
export class WeblinksModule { }
