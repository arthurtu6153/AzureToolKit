import { Component, OnInit, Input } from '@angular/core';
import { Weblink } from '../weblink';

@Component({
  selector: 'app-weblink-detail',
  templateUrl: './weblink-detail.component.html',
  styleUrls: ['./weblink-detail.component.css']
})
export class WeblinkDetailComponent implements OnInit {

  @Input() weblink: Weblink;
  constructor() { }

  ngOnInit() {
    
  }

  Update (){

  }

  Cancel() {
    this.weblink = null;
  }
}
