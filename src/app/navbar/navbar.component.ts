import { Component,OnInit} from '@angular/core';
import { Observable, Subscription  } from 'rxjs/Rx';
import { TmdbService } from './../services/tmdb.service';
import { TmdbImageService } from './../services/tmdb-image.service';
import { Router }            from '@angular/router';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(
    private tmdbService: TmdbService,
    private router: Router,
    private tmdbImageService :TmdbImageService 
  ) { }

  ngOnInit() {
  }
  

  goPopularActors(): void{
    this.router.navigate(['/persons', 'popular']);
  }
  
  goPopularMovies(): void{
    this.router.navigate(['/movies', 'popular']);
  }
  
}