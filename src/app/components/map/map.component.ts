import { Component } from '@angular/core';

// import {
// GOOGLE_MAPS_DIRECTIVES,
// GOOGLE_MAPS_PROVIDERS
// } from 'angular2-google-maps/core';


@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  title: string = 'Search for local farmers market in your area!';
  lat: number = 51.678418;
  lng: number = 7.809007;

}
