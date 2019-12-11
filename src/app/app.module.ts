import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgAisModule } from 'angular-instantsearch';
import { AgmCoreModule } from '@agm/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GeoSearchComponent } from './geo-search-markers/geo-search-markers.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    GeoSearchComponent
  ],
  imports: [
    CarouselModule,
    NgAisModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
