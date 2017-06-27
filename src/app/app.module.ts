import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import{MdIconModule} from '@angular/material';
import {MdCardModule} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';




import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component'
import {HomeComponent} from './home/home.component'
import {PopularMoviesComponent} from './popular-movies/popular-movies.component'
import {PopularActorsComponent} from './popular-actors/popular-actors.component'
import {TopMoviesComponent} from './top-movies/top-movies.component'
import {UpcomingMoviesComponent} from './upcoming-movies/upcoming-movies.component'
import {NowPlayingMoviesComponent} from './nowplaying-movies/nowplaying-movies.component'
import {MovieDetailComponent} from './movie-detail/movie-detail.component'
import {ActorDetailComponent} from './actor-detail/actor-detail.component'
import {PipeSafe} from './movie-detail/pipe.safe'
import { TmdbService } from './services/tmdb.service';
import { TmdbImageService } from './services/tmdb-image.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PopularMoviesComponent,
    PopularActorsComponent,
    TopMoviesComponent,
    UpcomingMoviesComponent,
    NowPlayingMoviesComponent,
    MovieDetailComponent,
    ActorDetailComponent,
    PipeSafe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdIconModule,
    MdMenuModule,
    BsDropdownModule.forRoot(),
    MdCardModule
    
      ],
  providers: [TmdbService,
  TmdbImageService
  ],
  bootstrap: [AppComponent],

})


export class AppModule { }
  

