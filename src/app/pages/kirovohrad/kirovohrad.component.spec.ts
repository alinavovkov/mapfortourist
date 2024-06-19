import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KirovohradComponent } from './kirovohrad.component';

describe('KirovohradComponent', () => {
  let component: KirovohradComponent;
  let fixture: ComponentFixture<KirovohradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KirovohradComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KirovohradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
