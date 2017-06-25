import { Component, OnInit } from '@angular/core';
import { TmdbService } from './../services/tmdb.service';
import { TmdbImageService } from './../services/tmdb-image.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies = [];

  constructor(private tmdbService: TmdbService, private tmdbImageService: TmdbImageService){}

  ngOnInit(){
  }
}
