import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaporizhiaComponent } from './zaporizhia.component';

describe('ZaporizhiaComponent', () => {
  let component: ZaporizhiaComponent;
  let fixture: ComponentFixture<ZaporizhiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZaporizhiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZaporizhiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
