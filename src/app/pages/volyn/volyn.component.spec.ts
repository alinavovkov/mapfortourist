import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolynComponent } from './volyn.component';

describe('VolynComponent', () => {
  let component: VolynComponent;
  let fixture: ComponentFixture<VolynComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VolynComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
