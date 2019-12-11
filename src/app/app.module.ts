import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgAisModule } from 'angular-instantsearch';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { GeoSearchComponent } from './geo-search-markers/geo-search-markers.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    GeoSearchComponent
  ],
  imports: [
    NgAisModule.forRoot(),
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
