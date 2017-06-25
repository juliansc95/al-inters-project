import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PopularMoviesComponent} from './popular-movies/popular-movies.component'
import {PopularActorsComponent} from './popular-actors/popular-actors.component'

const routes: Routes = [
   { path: 'popular-movies',    component: PopularMoviesComponent },
   { path: 'popular-actors',    component: PopularActorsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
