import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {PopularMoviesComponent} from './popular-movies/popular-movies.component'
import {PopularActorsComponent} from './popular-actors/popular-actors.component'
import {TopMoviesComponent} from './top-movies/top-movies.component'
import {UpcomingMoviesComponent} from './upcoming-movies/upcoming-movies.component'
import {NowPlayingMoviesComponent} from './nowplaying-movies/nowplaying-movies.component'
import {MovieDetailComponent} from './movie-detail/movie-detail.component'
import {ActorDetailComponent} from './actor-detail/actor-detail.component'

const routes: Routes = [
   { path: '', component: HomeComponent},
   { path: 'popular-movies',    component: PopularMoviesComponent },
   { path: 'popular-actors',    component: PopularActorsComponent },
   { path: 'top-movies', component:TopMoviesComponent},
   {path:'upcoming-movies', component:UpcomingMoviesComponent},
   {path:'nowplaying-movies',component:NowPlayingMoviesComponent},
   {path: 'movie/:id', component: MovieDetailComponent},
   {path: 'person/:id', component: ActorDetailComponent},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
