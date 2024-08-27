import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';

import { HousingLocationComponent } from "../housing-location/housing-location.component";
import {HousingLocation} from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

   
  mainHousingLocation: HousingLocation = {
    id: 9999,
    name: 'Main Home',
    city: 'Impera city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };


}