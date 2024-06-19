import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhytomyrComponent } from './zhytomyr.component';

describe('ZhytomyrComponent', () => {
  let component: ZhytomyrComponent;
  let fixture: ComponentFixture<ZhytomyrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZhytomyrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZhytomyrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
