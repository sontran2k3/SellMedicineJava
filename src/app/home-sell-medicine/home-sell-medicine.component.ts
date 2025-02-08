import { Component } from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {HeroSectionComponent} from '../hero-section/hero-section.component';

@Component({
  selector: 'app-home-sell-medicine',
  imports: [
    FooterComponent,
    HeaderComponent,
    HeroSectionComponent
  ],
  templateUrl: './home-sell-medicine.component.html',
  styleUrl: './home-sell-medicine.component.css'
})
export class HomeSellMedicineComponent {

}
