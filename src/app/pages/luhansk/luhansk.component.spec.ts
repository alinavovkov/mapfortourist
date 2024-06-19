import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuhanskComponent } from './luhansk.component';

describe('LuhanskComponent', () => {
  let component: LuhanskComponent;
  let fixture: ComponentFixture<LuhanskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LuhanskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LuhanskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
