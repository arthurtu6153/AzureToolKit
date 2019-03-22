import { Component, OnInit,ViewChild, ElementRef, Inject } from '@angular/core';
import { Weblink } from './weblink';
import { HttpClient } from '@angular/common/http';
import { WeblinksService } from './weblinks.service';
import { Observable } from 'rxjs';

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

  isNewClicked: boolean = false;
  selectedWeblink: Weblink;
  allWeblinks: Weblink[];
  /*  
  =[
    {id:1, description:"Commissions", url:"https://commissions.preferredhomecare.com/Commission/"},
    {id:1, description:"Concen Tracker", url:"https://concerntracker.preferredhomecare.com/Concern/Dashboard/"},
    {id:1, description:"Global Patient Search", url:"https://apps.preferredhomecare.com/apps/GPS/"},
    {id:1, description:"Branch Order", url:"https://my.phc.com/BranchOrder/"},
    {id:1, description:"ADP Portal", url:"https://workforcenow.adp.com/public/index.htm"},
    {id:1, description:"CrossWalks", url:"https://my.phc.com/CrossWalks/"},
  ];*/

  // constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //   http.get<Weblink[]>(baseUrl + 'api/Weblinks/').subscribe(result => {
  //     this.allWeblinks = result;
  //   }, error => console.error(error));
  // }
  errorReceived: boolean;
  constructor(private weblinksService: WeblinksService){
    weblinksService.getWeblinks().subscribe();
  }

  private handleError(error: any){
    this.errorReceived = true;
    return Observable.throw(error);
  }

  ngOnInit() {
    this.getWeblinks();
  }

  getWeblinks(){
    this.weblinksService.getWeblinks()      
      .subscribe(weblinks => {
        this.allWeblinks = weblinks;
        console.log("fetch weblinks");
      });
  }

  clickNew(){
    this.isNewClicked = true;
  }
  creatNew(): Weblink{
    var w = new Weblink();
    w.description = "RRRRR";
    return w;
  }
  delete(weblink: Weblink){
    this.weblinksService.deleteWeblink(weblink).subscribe();
    this.getWeblinks();
    console.log("delete weblink " + weblink);
  }
  onSelect(weblink: Weblink){
    this.selectedWeblink = weblink;
    console.log(this.selectedWeblink);
  }

  cancelSelect(){
    this.selectedWeblink = null;
    this.editPanel.nativeElement.display ='none';
  }
}
