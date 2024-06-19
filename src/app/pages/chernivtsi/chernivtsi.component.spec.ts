import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChernivtsiComponent } from './chernivtsi.component';

describe('ChernivtsiComponent', () => {
  let component: ChernivtsiComponent;
  let fixture: ComponentFixture<ChernivtsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChernivtsiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChernivtsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
