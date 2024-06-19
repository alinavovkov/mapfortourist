import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumuComponent } from './sumu.component';

describe('SumuComponent', () => {
  let component: SumuComponent;
  let fixture: ComponentFixture<SumuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SumuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SumuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
