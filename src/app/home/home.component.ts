import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';

import { HousingLocationComponent } from "../housing-location/housing-location.component";
import {HousingLocation} from '../housinglocation';
import {HousingService} from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;

    console.log('Housing Location List', this.housingLocationList);
    console.log('Filtered Location List', this.filteredLocationList);
  }
  filterResults(text: string) {
    if (!text) {
       this.filteredLocationList = this.housingLocationList;
      return;
    }
    console.log('Filtering Results', text);
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
