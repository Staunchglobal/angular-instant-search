import { Component } from '@angular/core';
import * as algoliasearch from 'algoliasearch/lite';
import { environment } from 'src/environments/environment';

import { OwlOptions } from 'ngx-owl-carousel-o';

const searchClient = algoliasearch(
  environment.appID,
  environment.appKey
);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    center: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  };

  config = {
    indexName: environment.indexName,
    searchClient
  };
}
