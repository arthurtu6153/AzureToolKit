import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeblinksComponent } from './weblinks.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [WeblinksComponent],
  declarations: [WeblinksComponent]
})
export class WeblinksModule { }
