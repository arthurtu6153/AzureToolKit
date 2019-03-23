
import { Component, OnInit, Input } from '@angular/core';
import { Weblink } from '../weblink';
import { ActivatedRoute } from '@angular/router';
import { WeblinksService } from '../weblinks.service';
import { EventQueueService } from 'src/app/share/services/event-queue.service';
import { WeblinkNotice } from '../weblinkNotice';

@Component({
  selector: 'app-weblink-detail',
  templateUrl: './weblink-detail.component.html',
  styleUrls: ['./weblink-detail.component.css']
})
export class WeblinkDetailComponent implements OnInit {

  @Input() weblink: Weblink;
  @Input() isCreateNew: boolean;
  private notice: WeblinkNotice;
  constructor(private route: ActivatedRoute, private eventQueue: EventQueueService<WeblinkNotice>, public weblinksService: WeblinksService) { }

  ngOnInit() {
    // this.getWeblink();
    console.log("oninit");
    console.log(this.weblink);
  }


  Update (){
    this.weblinksService.updateWeblink(this.weblink).subscribe(_=>{
      this.weblink=null;
      this.notice = WeblinkNotice.WeblinkUpdated;
      this.eventQueue.publish(this.notice);
     });
  }

  AddNew(){
    console.log("add description = " + this.weblink.description);
    this.weblinksService.addWeblink(this.weblink).subscribe(_=>{
      this.weblink=null;
      this.isCreateNew = false;
      this.notice = WeblinkNotice.WeblinkAdded;
      this.eventQueue.publish(this.notice);
    });
  }
  Cancel() {
    this.weblink = null;
    this.isCreateNew = false;
    this.notice = WeblinkNotice.ActionCanceled;
    this.eventQueue.publish(this.notice);
  }
}
