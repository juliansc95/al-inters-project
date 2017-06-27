import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TmdbService {

//TMDB's endpoint for requests.
baseUrl: string = "https://api.themoviedb.org/3/";

apiKey: string = "8e195f7f265a22f1ffd3c6bac607452d";

constructor(private http: Http) { }
      
getMovies():Observable<any>{
    let urlPopular = 'movie/popular';
	return this.http.get(`${this.baseUrl}${urlPopular}?api_key=${this.apiKey}`)
	.map(response => {
		return response.json().results; 
	});
}  
getPopularActors():Observable<any>{
    let url = 'person/popular';
	return this.http.get(`${this.baseUrl}${url}?api_key=${this.apiKey}`)
	.map(response => {
		return response.json().results; 
	});
} 

getTopMovies():Observable<any>{
    let url = 'movie/top_rated';
	return this.http.get(`${this.baseUrl}${url}?api_key=${this.apiKey}`)
	.map(response => {
		return response.json().results; 
	});
} 

getUpcomingMovies():Observable<any>{
    let url = 'movie/upcoming';
	return this.http.get(`${this.baseUrl}${url}?api_key=${this.apiKey}`)
	.map(response => {
		return response.json().results; 
	});
} 

getNowPlayingMovies():Observable<any>{
    let url = 'movie/now_playing';
	return this.http.get(`${this.baseUrl}${url}?api_key=${this.apiKey}`)
	.map(response => {
		return response.json().results; 
	});
} 

getMovieDetail(id: number): Observable<Array<any>>{
		return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`).map(response => response.json()); 
		}
	

getMovieVideos(id: string): Observable<any>{
		let videoUrl  = '/videos'; 
		return this.http.get(`${this.baseUrl}movie/${id}${videoUrl}?api_key=${this.apiKey}`)
		.map(response => {
			return response.json().results; 
		})	
	}
getActorDetail(id: number): Observable<Array<any>>{
		return this.http.get(`${this.baseUrl}person/${id}?api_key=${this.apiKey}`).map(response => response.json()); 
		}

getGenderDisplay(id: number): string{
		let result: string = "";
		switch (id) {
			case 1:
				result = "Female";
				break;
			
			case 2:
				result = "Male";
				break;

			default:
				result = "Unkown";
				break;
		}
		return result;
	}

}

  