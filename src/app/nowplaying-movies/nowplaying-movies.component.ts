import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
 
// Observable class extensions
import 'rxjs/add/observable/of';
 
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { TmdbService } from './../services/tmdb.service';
import { TmdbImageService } from './../services/tmdb-image.service';

@Component({
  selector: 'nowplaying-movies',
  templateUrl: './nowplaying-movies.component.html',
  styleUrls: ['./nowplaying-movies.component.css']
})
export class NowPlayingMoviesComponent implements OnInit {

  movies = [];
  // Here is the initialization.
  constructor(private tmdbService:TmdbService, private router:Router,
  private tmdbImageService:TmdbImageService) { }

  ngOnInit() {
    this.tmdbService.getNowPlayingMovies().subscribe(response => {
						this.movies = response;
    });
  }
  
  /**
	* This method return image's url of TMDB's API.
	* @param {src} 
	* @return String with image's url formatted.
	**/
	getImgUrl(src: string): string {
		return this.tmdbImageService.getImgUrl(src);
  }
  }
 
  

