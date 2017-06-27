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
  selector: 'actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
  
  private person = []
  
  constructor(
    private tmdbService: TmdbService,
    private tmdbImageService: TmdbImageService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.tmdbService
      .getActorDetail(params['id']))
      .subscribe(person => {
        this.person = person;
    
      });

  }
  getImgUrl(src: string): string {
    return this.tmdbImageService.getImgUrl(src);
  }

  getGenderDisplay(id: number): string{
    return this.tmdbService.getGenderDisplay(id);
  }

  }
  