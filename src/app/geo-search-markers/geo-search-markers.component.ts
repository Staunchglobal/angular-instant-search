import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { BaseWidget, NgAisInstantSearch } from 'angular-instantsearch';
import { connectGeoSearch } from 'instantsearch.js/es/connectors';

@Component({
  selector: 'app-geo-search',
  templateUrl: './geo-search-markers.component.html'
})
export class GeoSearchComponent extends BaseWidget implements OnInit {
  state: {
    items: { name: string; _geoloc: { lat: number; lng: number } }[];
  };

  constructor(
    @Inject(forwardRef(() => NgAisInstantSearch))
    public instantSearchParent
  ) {
    super('GeoSearchComponent');
  }

  get center() {
    if (this.state.items && this.state.items.length > 0) {
      const [first] = this.state.items;
      return first._geoloc || { lat: 0, lng: 0 };
    }
    return { lat: 0, lng: 0 };
  }

  public ngOnInit() {
    this.createWidget(connectGeoSearch, {});
    super.ngOnInit();
  }

  onMouseOver(infoWindow, $event: MouseEvent) {
    infoWindow.open();
  }

  onMouseOut(infoWindow, $event: MouseEvent) {
      infoWindow.close();
  }
}
