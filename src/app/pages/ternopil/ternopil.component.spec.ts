import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TernopilComponent } from './ternopil.component';

describe('TernopilComponent', () => {
  let component: TernopilComponent;
  let fixture: ComponentFixture<TernopilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TernopilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TernopilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
