import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KyivCityComponent } from './kyiv-city.component';

describe('KyivCityComponent', () => {
  let component: KyivCityComponent;
  let fixture: ComponentFixture<KyivCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KyivCityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KyivCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
