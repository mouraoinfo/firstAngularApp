import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {RouterModule} from '@angular/router';
import { provideRouter } from '@angular/router';


import routes from './app/app.routes';
import { HousingLocationComponent } from './app/housing-location/housing-location.component';
import { HousingService } from './app/housing.service';





  bootstrapApplication(AppComponent, {
    providers: [ provideRouter(routes)],
  }).catch((err) => console.error(err));