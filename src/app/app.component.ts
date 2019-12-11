import { Component } from '@angular/core';
import * as algoliasearch from 'algoliasearch/lite';
import { environment } from 'src/environments/environment';

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
  config = {
    indexName: environment.indexName,
    searchClient
  };
}
