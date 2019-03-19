import { Component, OnInit } from '@angular/core';
import { DateService } from '../common/services/date.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{

  public currentDate: Date
  constructor(private dateService: DateService){
    this.currentDate = dateService.getCurrentDate();
  }

  ngOnInit(): void{}
}
