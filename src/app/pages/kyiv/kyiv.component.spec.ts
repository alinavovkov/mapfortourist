import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KyivComponent } from './kyiv.component';

describe('KyivComponent', () => {
  let component: KyivComponent;
  let fixture: ComponentFixture<KyivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KyivComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KyivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
