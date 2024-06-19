import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoltavaComponent } from './poltava.component';

describe('PoltavaComponent', () => {
  let component: PoltavaComponent;
  let fixture: ComponentFixture<PoltavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoltavaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoltavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
