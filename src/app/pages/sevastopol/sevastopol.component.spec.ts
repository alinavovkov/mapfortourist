import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevastopolComponent } from './sevastopol.component';

describe('SevastopolComponent', () => {
  let component: SevastopolComponent;
  let fixture: ComponentFixture<SevastopolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SevastopolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SevastopolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
