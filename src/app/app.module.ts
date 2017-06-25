import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import{MdIconModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import {MdButtonToggleModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { TmdbService } from './services/tmdb.service';
import { TmdbImageService } from './services/tmdb-image.service';

import { AppComponent } from './app.component';
import {PopularMoviesComponent} from './popular-movies/popular-movies.component'


@NgModule({
  declarations: [
    AppComponent,
    PopularMoviesComponent,
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
    MdSidenavModule,
    MdToolbarModule,
    MdTabsModule,
    MdButtonToggleModule,
    MdListModule,
    
      ],
  providers: [TmdbService,
  TmdbImageService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
