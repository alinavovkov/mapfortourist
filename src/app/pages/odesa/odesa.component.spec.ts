import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdesaComponent } from './odesa.component';

describe('OdesaComponent', () => {
  let component: OdesaComponent;
  let fixture: ComponentFixture<OdesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OdesaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OdesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
