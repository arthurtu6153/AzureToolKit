import { Injectable, Inject } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { Weblink } from "./weblink";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MessageService } from "src/app/share/services/messages/message.service";
import { ObserveOnSubscriber } from "rxjs/internal/operators/observeOn";



const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};   

@Injectable({
    providedIn: 'root',
})

export class WeblinksService{

 
    private weblinkUrl: string;
    constructor(private messageService: MessageService, private http: HttpClient, @Inject('BASE_URL') private baseUrl: string){
        this.weblinkUrl = this.baseUrl + 'api/Weblinks/';
    }

    private log(message: string){
        this.messageService.add(`weblinkService: ${message}`);
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
        };
    }
    
    getWeblink(id: number): Observable<Weblink>{
        const url = this.weblinkUrl + `${id}`;

        return this.http.get<Weblink>(url, httpOptions).pipe(
            tap(_=>this.log(`fetch weblink id=${id}`)),
            catchError(this.handleError<Weblink>('fetch Weblink'))
            );
    }

    getWeblinks(): Observable<Weblink[]>{
        return this.http.get<Weblink[]>(this.weblinkUrl)
        .pipe(
            tap(_=>this.log('fetched weblinks')),
            catchError(this.handleError<Weblink[]>('getWeblinks', []))
        );
    }

    deleteWeblink(weblink: Weblink | number):  Observable<Weblink>{
        const id = typeof weblink === 'number' ? weblink : weblink.id;
        const url = this.weblinkUrl + `${id}`;

        return this.http.delete<Weblink>(url, httpOptions).pipe(
            tap(_=>this.log(`deleted weblink id=${id}`)),
            catchError(this.handleError<Weblink>('deleteWeblink'))
            );
        
    }

    updateWeblink(weblink: Weblink): Observable<any>{
        return this.http.put(this.weblinkUrl, weblink, httpOptions).pipe(
            tap(_ => this.log(`updated weblink description=${weblink.description} url=${weblink.url}`)),
            catchError(this.handleError<any>('updateWeblink'))
          );
    }

    addWeblink(weblink: Weblink): Observable<any>{
        return this.http.post(this.weblinkUrl, weblink, httpOptions).pipe(
            tap(_ => this.log(`add weblink id=${weblink.id}`)),
            catchError(this.handleError<any>('addWeblink'))
          );
    }
}