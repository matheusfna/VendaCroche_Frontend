import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    private api_url = environment.api_url;
    private api_key = environment.api_key;

    constructor(private http: HttpClient) { }

    public getMelhorAvaliado(): Observable<any> {
        return this.http.get(this.api_url + '/movie/top_rated?api_key=' + this.api_key) ;
    }

    public getMaisPopular(): Observable<any> {
        return this.http.get(this.api_url + '/movie/popular?api_key=' + this.api_key);
    }
    
    public getMaisPopularPage(pageNumber:any): Observable<any> {
        return this.http.get(this.api_url + '/movie/popular?api_key=' + this.api_key + '&page=' + pageNumber);
    }

    public getById(id:any): Observable<any> {
        return this.http.get(this.api_url + '/movie/'+id+'?api_key=' + this.api_key);
    }

    public getVideoById(id:any): Observable<any> {
        return this.http.get(this.api_url + '/movie/'+id+'/videos?api_key=' + this.api_key);
    }

    public searchMovie(text:any): Observable<any> {

        console.log(this.api_url + '/search/movie?api_key=' + this.api_key+'&query='+text)
        return this.http.get(this.api_url + '/search/movie?api_key=' + this.api_key+'&query='+text);
    }

    public searchMoviePage(text:any, pageNumber:any): Observable<any> {
        return this.http.get(this.api_url + '/search/movie?api_key=' + this.api_key+'&query='+ text + '&page=' + pageNumber);
    }
}