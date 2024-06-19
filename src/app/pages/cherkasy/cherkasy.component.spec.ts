import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CherkasyComponent } from './cherkasy.component';

describe('CherkasyComponent', () => {
  let component: CherkasyComponent;
  let fixture: ComponentFixture<CherkasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CherkasyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CherkasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
