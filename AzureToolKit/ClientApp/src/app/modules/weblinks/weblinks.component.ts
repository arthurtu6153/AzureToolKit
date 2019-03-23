import { Component, OnInit,ViewChild, ElementRef, Inject, OnDestroy } from '@angular/core';
import { Weblink } from './weblink';
import { HttpClient } from '@angular/common/http';
import { WeblinksService } from './weblinks.service';
import { Observable, Subscription } from 'rxjs';
import { EventQueueService } from 'src/app/share/services/event-queue.service';
import { WeblinkNotice } from './weblinkNotice';

@Component({
  selector: 'app-weblinks',
  templateUrl: './weblinks.component.html',
  styleUrls: ['./weblinks.component.css']
})
export class WeblinksComponent implements OnInit, OnDestroy {

  // @ViewChild('edit-link-panel') editPanel: ElementRef;

  isNewClicked: boolean = false;
  selectedWeblink: Weblink;
  allWeblinks: Weblink[];
  errorReceived: boolean;
  subscriptionWeblinkNotice: Subscription;
  weblinkType: number =22;
  department: number=34;

  constructor(private weblinksService: WeblinksService, private eventQueue:EventQueueService<WeblinkNotice>){
    this.subscriptionWeblinkNotice = eventQueue.subscribe().subscribe(notice=>{
      this.initialize();
    })
  }

  private handleError(error: any){
    this.errorReceived = true;
    return Observable.throw(error);
  }

  private initialize(){
      this.isNewClicked = false;
      this.selectedWeblink = null;
      this.getWeblinks();
  }

  ngOnInit() {
    this.initialize();
  }
  ngOnDestroy(): void {
    this.subscriptionWeblinkNotice.unsubscribe();
  }
  getWeblinks(){
    this.weblinksService.getWeblinks(this.department, this.weblinkType)      
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
    w.type = this.weblinkType;
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

}
