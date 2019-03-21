import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { Weblink } from "./weblink";
import { HttpClient, HttpHeaders } from "@angular/common/http";

    const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

@Injectable({
    providedIn: 'root',
})
export class WeblinksService{


        
    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string){
        
    }


    getWeblinks(): Observable<Weblink[]>{
        return this.http.get<Weblink[]>(this.baseUrl + 'api/Weblinks/')
    }

    deleteWeblink(weblink: Weblink | number){
        const id = typeof weblink === 'number' ? weblink : weblink.id;
        const url = this.baseUrl + 'api/Weblinks/' + id;
        console.log(url);
        this.http.delete(url, httpOptions);
    }
}