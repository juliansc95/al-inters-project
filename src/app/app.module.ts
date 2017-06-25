import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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




import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
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
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
