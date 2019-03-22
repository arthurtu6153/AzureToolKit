
import { Component, OnInit, Input } from '@angular/core';
import { Weblink } from '../weblink';
import { ActivatedRoute } from '@angular/router';
import { WeblinksService } from '../weblinks.service';

@Component({
  selector: 'app-weblink-detail',
  templateUrl: './weblink-detail.component.html',
  styleUrls: ['./weblink-detail.component.css']
})
export class WeblinkDetailComponent implements OnInit {

  @Input() weblink: Weblink;
  constructor(private route: ActivatedRoute, public weblinksService: WeblinksService) { }

  ngOnInit() {
    // this.getWeblink();
  }

  // private getWeblink(): void{
  //   const id = parseFloat(this.route.snapshot.paramMap.get('id'));
  //   this.weblinksService.getWeblink(id).subscribe(weblink=> this.weblink = weblink);
  // }
  Update (){
    this.weblinksService.updateWeblink(this.weblink).subscribe(_=>this.weblink=null);
  }

  AddNew(){
    console.log("add description = " + this.weblink.description);
    this.weblinksService.addWeblink(this.weblink).subscribe(_=>this.weblink=null);
  }
  Cancel() {
    this.weblink = null;
  }
}
