import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSellMedicineComponent } from './home-sell-medicine.component';

describe('HomeSellMedicineComponent', () => {
  let component: HomeSellMedicineComponent;
  let fixture: ComponentFixture<HomeSellMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSellMedicineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSellMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
