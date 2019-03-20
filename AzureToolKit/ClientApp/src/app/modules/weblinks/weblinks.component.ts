import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Weblink } from './weblink';

@Component({
  selector: 'app-weblinks',
  templateUrl: './weblinks.component.html',
  styleUrls: ['./weblinks.component.css']
})
export class WeblinksComponent implements OnInit {
  @ViewChild('edit-link-panel') editPanel: ElementRef;
  weblink: Weblink = { 
     id:1,
     description: "Commissions",
     url: "https://commissions.preferredhomecare.com/Commission/"
  };

  selectWeblink: Weblink;
  allWeblinks: Weblink[]=[
    {id:1, description:"Commissions", url:"https://commissions.preferredhomecare.com/Commission/"},
    {id:1, description:"Concen Tracker", url:"https://concerntracker.preferredhomecare.com/Concern/Dashboard/"},
    {id:1, description:"Global Patient Search", url:"https://apps.preferredhomecare.com/apps/GPS/"},
    {id:1, description:"Branch Order", url:"https://my.phc.com/BranchOrder/"},
    {id:1, description:"ADP Portal", url:"https://workforcenow.adp.com/public/index.htm"},
    {id:1, description:"CrossWalks", url:"https://my.phc.com/CrossWalks/"},
  ];
  constructor() { }

  ngOnInit() {
  }

  onSelect(weblink: Weblink){
    this.selectWeblink = weblink;
  }

  cancelSelect(){
    this.selectWeblink = null;
    this.editPanel.nativeElement.display ='none';
  }
}
