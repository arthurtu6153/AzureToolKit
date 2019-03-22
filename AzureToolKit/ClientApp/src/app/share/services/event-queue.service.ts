import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventQueueService <T>{

  private subject = new Subject<T>();
  
  publish(event: T){
    this.subject.next(event);
  }

  subscribe():Observable<T>{
    return this.subject.asObservable();
  }

  clear(){
    this.subject.next();
  }
}
