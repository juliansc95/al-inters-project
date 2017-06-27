import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router'; 
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
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie = [];
  video: any;
  // Here is the initialization.
  constructor(
  private tmdbService:TmdbService, 
  private router:Router,
  private route: ActivatedRoute,
  private tmdbImageService:TmdbImageService) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.tmdbService
      .getMovieDetail(params['id']))
      .subscribe(movie => {
        this.movie = movie;
        
      }),
      this.route.params.switchMap((params: Params)=>this.tmdbService.getMovieVideo(params['id'])).subscribe(video => {
          this.video = video[0];
        })
  }
 
  /**
	* This method return image's url of TMDB's API.
	* @param {src} 
	* @return String with image's url formatted.
	**/
	getImgUrl(src: string): string {
		return this.tmdbImageService.getImgUrl(src);
  }

  getUrlYoutube(): string {
    return `https://www.youtube.com/embed/${this.video.key}`
    }

  

}