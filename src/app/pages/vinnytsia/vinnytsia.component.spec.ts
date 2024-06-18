import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinnytsiaComponent } from './vinnytsia.component';

describe('VinnytsiaComponent', () => {
  let component: VinnytsiaComponent;
  let fixture: ComponentFixture<VinnytsiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VinnytsiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VinnytsiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
