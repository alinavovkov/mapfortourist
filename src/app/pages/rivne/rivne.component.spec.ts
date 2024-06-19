import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RivneComponent } from './rivne.component';

describe('RivneComponent', () => {
  let component: RivneComponent;
  let fixture: ComponentFixture<RivneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RivneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RivneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
