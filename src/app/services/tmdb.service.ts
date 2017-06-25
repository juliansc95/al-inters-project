import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TmdbService {

//TMDB's endpoint for requests.
baseUrl: string = "https://api.themoviedb.org/3/movie";

apiKey: string = "8e195f7f265a22f1ffd3c6bac607452d";

constructor(private http: Http) { }
      
getMovies():Observable<any>{
    let urlPopular = '/popular';
	return this.http.get(`${this.baseUrl}${urlPopular}?api_key=${this.apiKey}`)
	.map(response => {
		return response.json().results; 
	})
}  

}