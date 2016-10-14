import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { MapComponent } from './components/map/map.component';

import { AgmCoreModule } from 'angular2-google-maps/core';

// Import new components by adding it to the declarations array
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBoBjj5MOkNFhoSYDxz9Af_CddmWpNK-HA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
