import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonetskComponent } from './donetsk.component';

describe('DonetskComponent', () => {
  let component: DonetskComponent;
  let fixture: ComponentFixture<DonetskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonetskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonetskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
