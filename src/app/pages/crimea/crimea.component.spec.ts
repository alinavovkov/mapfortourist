import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrimeaComponent } from './crimea.component';

describe('CrimeaComponent', () => {
  let component: CrimeaComponent;
  let fixture: ComponentFixture<CrimeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrimeaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrimeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
