import { Injectable, Inject } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { Weblink } from "./weblink";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MessageService } from "src/app/share/services/messages/message.service";



const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};   

@Injectable({
    providedIn: 'root',
})

export class WeblinksService{

 

    constructor(private messageService: MessageService, private http: HttpClient, @Inject('BASE_URL') private baseUrl: string){
        
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
    
    getWeblinks(): Observable<Weblink[]>{
        return this.http.get<Weblink[]>(this.baseUrl + 'api/Weblinks/')
        .pipe(
            tap(_=>this.log('fetched weblinks')),
            catchError(this.handleError<Weblink[]>('getWeblinks', []))
        );
    }

    deleteWeblink(weblink: Weblink | number):  Observable<Weblink>{
        const id = typeof weblink === 'number' ? weblink : weblink.id;
        const url = this.baseUrl + `api/Weblinks/${id}`;

        return this.http.delete<Weblink>(url, httpOptions).pipe(
            tap(_=>this.log(`deleted weblink id=${id}`)),
            catchError(this.handleError<Weblink>('delete Weblink'))
            );
        
    }
}