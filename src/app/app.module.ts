import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImageMapComponent } from './image-map/image-map.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ImageMapComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
