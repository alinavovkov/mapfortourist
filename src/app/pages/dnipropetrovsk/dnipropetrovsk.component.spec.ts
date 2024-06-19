import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnipropetrovskComponent } from './dnipropetrovsk.component';

describe('DnipropetrovskComponent', () => {
  let component: DnipropetrovskComponent;
  let fixture: ComponentFixture<DnipropetrovskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DnipropetrovskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DnipropetrovskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
