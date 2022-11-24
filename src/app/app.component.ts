import { Component } from '@angular/core';
import { ImageMapCoordinate } from './image-map/image-map.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  image: string =
    'https://image.shutterstock.com/image-vector/solar-system-sun-planets-vector-260nw-751091653.jpg';
  coordinates: ImageMapCoordinate[] = [
    {
      name: 'The sun',
      x: 0,
      y: 159,
      width: 95,
      height: 100,
    },
  ];

  showImage: boolean;

  getClick(coordinate: ImageMapCoordinate) {
    console.log(`Clicked on ${coordinate.name}`);
  }
}
