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
  selector: 'popular-actors',
  templateUrl: './popular-actors.component.html',
  styleUrls: ['./popular-actors.component.css']
})
export class PopularActorsComponent implements OnInit {
  
  private persons = []
  
  constructor(
    private tmdbService: TmdbService,
    private tmdbImageService: TmdbImageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.tmdbService.getPopularActors().subscribe(persons => {
        this.persons = persons;
      });

  }
  getImgUrl(src: string): string {
    return this.tmdbImageService.getImgUrl(src);
  }

  }
  
  


