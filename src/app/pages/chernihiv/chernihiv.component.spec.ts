import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChernihivComponent } from './chernihiv.component';

describe('ChernihivComponent', () => {
  let component: ChernihivComponent;
  let fixture: ComponentFixture<ChernihivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChernihivComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChernihivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
