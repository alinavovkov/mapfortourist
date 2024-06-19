import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MykolaivComponent } from './mykolaiv.component';

describe('MykolaivComponent', () => {
  let component: MykolaivComponent;
  let fixture: ComponentFixture<MykolaivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MykolaivComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MykolaivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
