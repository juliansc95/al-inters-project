import { Component,OnInit} from '@angular/core';
import { Observable, Subscription  } from 'rxjs/Rx';
import { Subject }           from 'rxjs/Subject';
import { TmdbService } from './../services/tmdb.service';
import { TmdbImageService } from './../services/tmdb-image.service';
import { Router }            from '@angular/router';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private searchPersonTerms = new Subject<string>(); //Observable
    resultsPersons: Observable<any>; //  Response information of persons

  
  constructor(
    private tmdbService: TmdbService,
    private router: Router,
    private tmdbImageService :TmdbImageService 
  ) { }

  ngOnInit():void {this.resultsPersons = this.searchPersonTerms
      .debounceTime(300)  
      .distinctUntilChanged()  
      .switchMap(term => this.test(term,'/person')) 
      .catch(error => {
        console.log(error);
        return Observable.of<any>([]); 
      });
  }
  
  searchTerm(term: string): void {

    this.searchPersonTerms.next(term);
    
  }

  test(term: string, specificSearch=""){

    return term ? this.tmdbService.search(term, specificSearch) : Observable.of<any>([])
  }

  goPopularActors(): void{
    this.router.navigate(['/persons', 'popular']);
  }
  
  goPopularMovies(): void{
    this.router.navigate(['/movies', 'popular']);
  }

  

  
}