import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
import {HomeSellMedicineComponent} from './app/home-sell-medicine/home-sell-medicine.component';

bootstrapApplication(HomeSellMedicineComponent, appConfig)
  .catch((err) => console.error(err));
